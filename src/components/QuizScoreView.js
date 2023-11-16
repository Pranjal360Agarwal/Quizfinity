import React from 'react';
import PropTypes from 'prop-types';

export const QuizScoreView = ({score, totalQuestions}) =>

  <div className="quiz-score-view">
    <h3>Congratulations!</h3>
    <p>You got {score} correct out of {totalQuestions}</p>
  </div>

;

QuizScoreView.propTypes = {

  score: PropTypes.number.isRequired,
  totalQuestions: PropTypes.number.isRequired,

};
