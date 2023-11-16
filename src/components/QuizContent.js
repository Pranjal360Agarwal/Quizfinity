import React from 'react';
import PropTypes from 'prop-types';
import { QuizStartView } from './QuizStartView';
import { QuizQuestionsView } from './QuizQuestionsView';
import { QuizScoreView } from './QuizScoreView';
import './QuizContent.css';

export const QuizContent = ({ quizState, ...otherProps }) =>

  <div className="QuizContent">
    {
      {
        begin: <QuizStartView {...otherProps}/>,
        end: <QuizScoreView {...otherProps}/>,
        check: <QuizQuestionsView {...otherProps} showAnswers/>,
        progress: <QuizQuestionsView {...otherProps}/>
      }[quizState]
    }
  </div>

QuizContent.propTypes = {

  quizState: PropTypes.string.isRequired,
  intro: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  totalQuestions: PropTypes.number.isRequired

};
