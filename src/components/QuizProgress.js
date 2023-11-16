import React from 'react';
import PropTypes from 'prop-types';
import './QuizProgress.css';

export const QuizProgress = ({
    quizState,
    questionId,
    totalQuestions
  }) =>

  (quizState === 'progress' || quizState === 'check') &&

  <div className="QuizProgress">
    <div style={{width: `${((questionId + 1) / totalQuestions) * 100}%`}}></div>
  </div>

;

QuizProgress.propTypes = {

  quizState: PropTypes.string.isRequired,
  questionId: PropTypes.number.isRequired,
  totalQuestions: PropTypes.number.isRequired

};
