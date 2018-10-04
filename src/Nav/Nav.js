import React, { Component } from 'react';
import { render } from 'react-dom';
import MotionStack from 'react-motion-stack';
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

    render() {
        return (
            <div className='nav-conatiner'>
                <header className='header'>
                    <img className="icons" src={profileIcon} alt="" />
                    <img className="icons" src={chatIcon} alt="" />
                </header>
            </div>
        )
    }
}