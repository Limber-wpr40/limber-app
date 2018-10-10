import React, {Component} from 'react';
import punks from './jestutilities/jest-testing';

export default class Geolocation extends Component {
    constructor(){
        super();

        this.state = {
            position: {}
        }
    }

    // getting long + lat coords for users //
    componentDidMount(){
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                console.log(position)
                punks.handleGeolocation(position)
                this.setState({
                    position
                })
            })
        } else {
            return 'Geolocation is not supported by this browser'
        }
    }

    render(){
        return(
            <div>
            </div>
        )
    }
}