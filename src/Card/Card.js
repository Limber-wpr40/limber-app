import React, { Component } from 'react';
import axios from 'axios';
import MotionStack from 'react-motion-stack';
import 'react-motion-stack/build/motion-stack.css';
import './Card.css';
import pmtest from '../jestutilities/pmtest';
import punks from '../jestutilities/jest-testing';
import briefcase from '../logos/briefcase.png';
import gpslogo from '../logos/placeholder.png';
import gradcap from '../logos/mortarboard.png';


export default class Card extends Component {
    constructor() {
        super();

        this.state = {
            potMatches: [],
            super_like: false,
            match_id: 0

        }
    }

    onBeforeSwipe = (swipe, direction, state) => {
        console.log('direction', direction);
        console.log('state', state.pressedId);
        pmtest.handleStateChange(state)
        pmtest.handleDirectionChange(direction)




        punks.handleDirectionChange(direction);
        punks.handleState(state);

        swipe();
        if (direction === 'right') {
            this.setState({ super_like: true, match_id: state.pressedId })
            let myLike = { match_id: this.state.match_id, super_like: this.state.super_like }
            axios.post('/api/likes', myLike)
            console.log('LIKE!')
        } else {
            console.log('NOPE!')
        }
    }

    onSwipeEnd = ({ data }) => {
        punks.handleOnSwipeEnd(data)
    };

    componentDidMount() {
        axios.get('/api/possiblematches')
            .then(res => {
                res.data.map((potMatch) => {
                    let { user_id, user_image, first_name, current_age, job, school, dist } = potMatch
                    potMatch.id = user_id
                    potMatch.element = (
                        <div className="user-card">
                            <img src={`../images/${user_image}`} alt="" />
                            <section className="section-match-details">
                                <h1 className="name-detail">{first_name}
                                    <span className="age-detail"> {current_age}</span>
                                </h1>
                                <p className="job-detail">
                                    <img className="briefcase" src={briefcase} alt="" />
                                    {job}
                                </p>
                                <p className="school-detail">
                                    <img src={gradcap} alt="" />
                                    {school}
                                </p>
                                <p className="dist-detail">
                                    <img src={gpslogo} alt="" />
                                    {dist} miles away
                                </p>
                            </section>
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
                {/* {displayDetails} */}
            </div>
        );
    }
}