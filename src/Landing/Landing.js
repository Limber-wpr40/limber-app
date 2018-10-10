import React, { Component } from 'react';
import MotionStack from 'react-motion-stack';
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



    // renderButtons(props) {
    //     return (
    //         <div className="btn-group">
    // <button children="👎" onClick={props.reject} />
    //             <button children="👍" onClick={props.accept} />
    //         </div>
    //     );
    // }



    render() {
        return (
            <div>
                <Nav />
                <Card />
                <div className='landing-container' >
                    <footer className='landing-footer'>
                        <div className='dot-2'>
                            <img className='footer-icons' src={refresh} alt="" />
                        </div>
                        <div className='dot'>
                            <img className='footer-icons' src={nope} alt="" />
                        </div>
                        <div className='dot-2'>
                            <img className='footer-icons' src={star} alt="" />
                        </div>
                        <div className='dot'>
                            <img className='footer-icons'  src={like} alt="" />
                        </div>
                        <div className='dot-2'>
                            <img className='footer-icons' src={thunder} alt="" />
                        </div>
                    </footer>
                </div>
            </div>
        )
    }
}

