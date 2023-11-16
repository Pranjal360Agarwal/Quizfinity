import React from 'react';
import PropTypes from 'prop-types';
import './QuizTitle.css';

export const QuizTitle = ({ content }) =>

  <h2 className="QuizTitle">{content}</h2>;

QuizTitle.propTypes = {

  content: PropTypes.string.isRequired

};
