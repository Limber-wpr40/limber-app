import React from 'react';
import { render } from 'react-dom';
import MotionStack from 'react-motion-stack';
import 'react-motion-stack/build/motion-stack.css';
import './demo.css';
 
const data = Array.from({ length: 10 }, (_, i) => ({
  id: new Date().getTime() + i,
  element: (
    <img className='matchimage'
      draggable={false}
      src={`../images/${i + 1}`}
      // src={`https://source.unsplash.com/random/${i + 1}`}
    />
  )
}));
 
class Demo extends React.Component {
  onBeforeSwipe = (swipe, direction, state) => {
    console.log('direction', direction);
    console.log('state', state);
 
    swipe();
  }
 
  onSwipeEnd = ({ data }) => {
    console.log('data', data);
  };
 
  renderButtons(props) {
    return (
      <div className="btn-group">
        <button children="👎" onClick={props.reject} />
        <button children="👍" onClick={props.accept} />
      </div>
    );
  }
 
  render() {
    return (
      <div className="demo-wrapper">
        <MotionStack
          data={data}
          onSwipeEnd={this.onSwipeEnd}
          onBeforeSwipe={this.onBeforeSwipe}
          render={props => props.element}
          renderButtons={this.renderButtons}
        />
      </div>
    );
  }
}
export default Demo;