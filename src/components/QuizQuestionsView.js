import React from 'react';
import PropTypes from 'prop-types';
import './QuizQuestionsView.css';

export const QuizQuestionsView = ({
    answer,
    choices,
    handleChoiceClick,
    question,
    questionId,
    userAnswers,
    showAnswers,
    totalQuestions
  }) =>

  <div className="QuizQuestionsView">
    
    <div className="quiz-question">
      <span>{questionId + 1} / {totalQuestions}</span>
      <h3>{question}</h3>
    </div>

    <div className="quiz-choices">
      {choices.map((choice, index) =>
        <div 
          className={`quiz-choice ${index === userAnswers.get(questionId) ? 'checked' : ''} ${index === answer ? 'right-answer' : ''}`}
          key={`q${questionId}-i${index}`}
        >
          <label>
            <input 
              type="radio"
              value={index}
              name={`q${questionId}-choice`}
              defaultChecked={index === userAnswers.get(questionId)}
              disabled={showAnswers}
              onClick={() => handleChoiceClick(questionId, index)}
            />
            {choice}
          </label>
        </div>
      )}
    </div>

  </div>

;

QuizQuestionsView.propTypes = {

  answer: PropTypes.number,
  choices: PropTypes.array.isRequired,
  handleChoiceClick: PropTypes.func.isRequired,
  questionId: PropTypes.number.isRequired,
  question: PropTypes.string.isRequired,
  userAnswers: PropTypes.object.isRequired,
  showAnswers: PropTypes.bool,
  totalQuestions: PropTypes.number.isRequired

};
