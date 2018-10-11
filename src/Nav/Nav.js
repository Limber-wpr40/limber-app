import React, { Component } from 'react';
import './Nav.css';
import profileIcon from '../logos/profile_icon.png';
import chatIcon from '../logos/chatIcon.png';
import {Link } from 'react-router-dom'


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
                <Link to='/profile'>
                    <img className="icons" src={profileIcon} alt="" />
                </Link>
                <Link to='/messages'>
                    <img className="icons" src={chatIcon} alt="" />
                </Link>
                </header>
            </div>
        )
    }
}