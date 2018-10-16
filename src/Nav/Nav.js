import React, { Component } from 'react';
import './Nav.css';
import profileIcon from '../logos/user.png';
import bubble from '../logos/speech-bubbles.png';
import tinderLogo from '../logos/tinder.jpg';
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
                <Link to='/landing'>
                <img className="logo" src={tinderLogo} alt="" />
                </Link>
                <Link to='/messages'>
                    <img className="icons" src={bubble} alt="" />
                </Link>
                </header>
            </div>
        )
    }
}