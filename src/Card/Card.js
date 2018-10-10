import React, { Component } from 'react';
import axios from 'axios';
import { render } from 'react-dom';
import MotionStack from 'react-motion-stack';
import 'react-motion-stack/build/motion-stack.css';
import './Card.css';
import pmtest from '../jestutilities/pmtest';

const data = Array.from({ length: 10 }, (_, i) => ({
    id: new Date().getTime() + i,
    element: (
        <div>
            <img
                draggable={false}
                src={`https://source.unsplash.com/random/${i + 1}`}
            />
        </div>
    )
}));

export default class Card extends Component {
    constructor(){
        super();

        this.state = {
            potMatches: [],
            super_like:false,
            match_id:0

        }
    }

    onBeforeSwipe = (swipe, direction, state) => {
        console.log('direction', direction);
        console.log('state', state.pressedId);
        pmtest.handleStateChange(state)
        pmtest.handleDirectionChange(direction)
        

       
        swipe();
        if(direction === 'right'){
                       this.setState({super_like:true, match_id:state.pressedId})
            console.log(this.state.match_id, this.state.super_like)
            axios.post('/api/likes', this.state.match_id, this.state.super_like)
          console.log('LIKE!')
        }else{
          console.log('NOPE!')
        }
      }

    onSwipeEnd = ({ data }) => {
        console.log("data", data);
    };

    componentDidMount() {
        axios.get('/api/possiblematches')
        .then(res => {
            res.data.forEach((potMatch) => {
                let {user_id, user_image, user_name, user_age, user_job, user_school, user_distance} = potMatch
                potMatch.id = user_id
                potMatch.element = (
                    <div>
                        <img src={`../images/${user_image}`} alt=""/>
                        <h1>{user_name}</h1>
                        <h2>{user_age}</h2>
                        <p>{user_job}</p>
                        <p>{user_school}</p>
                        <p>{user_distance}</p>
                    </div>
                )
            })
            this.setState({
                potMatches: res.data
            })
            console.log(res.data)
        })


    }

    render() {
        return (
            <div className="demo-wrapper">
                <MotionStack
                    data={this.state.potMatches}
                    onSwipeEnd={this.onSwipeEnd}
                    onBeforeSwipe={this.onBeforeSwipe}
                    render={props => props.element}
                    renderButtons={this.renderButtons}
                    infinite={false}
                />
            </div>
        );
    }
}