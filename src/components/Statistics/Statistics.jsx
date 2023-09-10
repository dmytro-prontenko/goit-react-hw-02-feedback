import React from 'react';
import Notification from 'components/Notification/Notification';

const Statistics = ({ data, total, positivePercentage }) => {
  const dataFromState = Object.entries(data);
  const items = dataFromState.map(state => {
    return (
      <li key={state[0]} className="feedback-item" id={state[0]}>
        <span className="feedback-name">{state[0]} :</span>{' '}
        <span className="quant">{state[1]}</span>
      </li>
    );
  });

  return total() ? (
    <>
      <ul className="feedbacks-container">{items}</ul>
      <p className="total">
        <span className="total">Total:</span>{' '}
        <span className="quant">{total()}</span>
      </p>
      <p className="positive-feedbacks">
        <span className="percentage">Positive feedbacks: </span>
        <span className="quant">{positivePercentage()}%</span>
      </p>
    </>
  ) : (
    <Notification message={'There is no feedback'} />
  );
};

export default Statistics;
