import React, { Component } from 'react';
import { render } from 'react-dom';
import Switch from 'react-toggle-switch';
import MotionStack from 'react-motion-stack';
import Toggle from 'react-toggle';
import './Nav.css';

import profileIcon from '../logos/profile_icon.png';
import chatIcon from '../logos/chatIcon.png';


export default class Nav extends Component {
    constructor(props) {
        super(props)

        this.state = {
            switched: false
        }
    }

    toggleSwitch = () => {
        this.setState(prevState => {
            return {
                switched: !prevState.switched
            };
        });
    };

    render() {
        return (
            <div className='nav-conatiner'>
                <Switch className='toggle' onClick={this.toggleSwitch} on={this.state.switched} />
                <header className='header'>
                    <img className="icons" src={profileIcon} alt="" />
                    <img className="icons" src={chatIcon} alt="" />
                </header>
            </div>
        )
    }
}