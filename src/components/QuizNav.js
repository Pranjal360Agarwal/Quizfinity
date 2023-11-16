import React from 'react';
import PropTypes from 'prop-types';
import './QuizNav.css';

export const QuizNav = ({

  handleBackClick,
  handleCheckClick,
  handleStartClick,
  handleExitClick,
  handleNextClick,
  handleSubmitClick,
  questionState,
  quizState

}) => {

  const start = <button onClick={handleStartClick} className="align-center">Start</button>;
  const back = <button onClick={handleBackClick} className="align-left">&#x21E6; Back</button>;
  const next = <button onClick={handleNextClick} className="align-right">Next &#x21E8;</button>;
  const submit = <button onClick={handleSubmitClick} className="align-right">Submit</button>;
  const check = <button onClick={handleCheckClick} className="align-center">Check Answers</button>;
  const exit = <button onClick={handleExitClick} className="align-right">Exit</button>;

  return (
    <div className="QuizNav">
      { quizState === 'begin' &&  start}
      { ['progress', 'check'].includes(quizState) && questionState !== 'first' &&  back }
      { ['progress', 'check'].includes(quizState) && questionState !== 'last' &&  next }
      { quizState === 'progress' && questionState === 'last' && submit }
      { quizState === 'check' && questionState === 'last' && exit }
      { quizState === 'end' && check}
    </div>
  );
};

QuizNav.propTypes = {

  quizState: PropTypes.string.isRequired,
  questionState: PropTypes.string.isRequired,
  handleStartClick: PropTypes.func.isRequired,
  handleBackClick: PropTypes.func.isRequired,
  handleNextClick: PropTypes.func.isRequired,
  handleSubmitClick: PropTypes.func.isRequired,
  handleCheckClick: PropTypes.func.isRequired,
  handleExitClick: PropTypes.func.isRequired,

};
