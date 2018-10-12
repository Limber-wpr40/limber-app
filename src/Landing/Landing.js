import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import Card from '../Card/Card';
import refresh from '../logos/refresh.png';
import nope from '../logos/nope.png';
import star from '../logos/star.png';
import like from '../logos/like.png';
import thunder from '../logos/thunder.png'

import './Footer.css';



export default class Landing extends Component {
    constructor(props) {
        super(props);

        this.state = {
            

        }
    }


    render() {
        return (
            <div>
                <Nav />
                <Card />
            </div>
        )
    }
}

