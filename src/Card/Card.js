import React, { Component } from 'react';
import axios from 'axios';
import { render } from 'react-dom';
import MotionStack from 'react-motion-stack';
import 'react-motion-stack/build/motion-stack.css';
import './Card.css';

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
            potMatches: []
        }
    }

    onSwipeEnd = ({ data }) => {
        console.log("data", data);
    };

    componentDidMount() {
        console.log(res.data)
        axios.get('/api/possiblematches')
        .then(res => {
            this.setState({
                potMatches: res.data
            })
        })

    }

    render() {
        return (
            <div className="demo-wrapper">
                <MotionStack
                    data={data}
                    onSwipeEnd={this.onSwipeEnd}
                    render={props => props.element}
                    renderButtons={this.renderButtons}
                />
                <meh>meh</meh>
            </div>
        );
    }
}