import React from 'react';
import PropTypes from 'prop-types';

export const QuizStartView = ({ intro }) =>

  <div className="quiz-start-view">
    <p>{intro}</p>
  </div>

;

QuizStartView.propTypes = {

  intro: PropTypes.string.isRequired

};
