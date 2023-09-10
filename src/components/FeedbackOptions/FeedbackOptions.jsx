import React from 'react';
import "./FeedbackOptions.css"

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const buttons = options.map(state => {
    return <button className='button btn' onClick={onLeaveFeedback} key={state} name={state}>{state.toUpperCase()}</button>;
  });

  return <div className="buttons-container">{buttons}</div>;
};

export default FeedbackOptions;
