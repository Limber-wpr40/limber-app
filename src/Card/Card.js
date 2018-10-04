import React, { Component } from 'react';
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
    onSwipeEnd = ({ data }) => {
        console.log("data", data);
    };

    // renderButtons(props) {
    //   return (
    //     <div className="btn-group">
    //       <button children="👎" onClick={props.reject} />
    //       <button children="👍" onClick={props.accept} />
    //     </div>
    //   );
    // }

    render() {
        return (
            <div className="demo-wrapper">
                <MotionStack
                    data={data}
                    onSwipeEnd={this.onSwipeEnd}
                    render={props => props.element}
                    renderButtons={this.renderButtons}
                />
            </div>
        );
    }
}