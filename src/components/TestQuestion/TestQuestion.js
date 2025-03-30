import React from 'react';
import './TestQuestion.css';

const TestQuestion = ({question, options, selectedAnswer, onSelect}) => {

  return (
    <div className='question-block'>
        <p>{question}</p>
        {options.map((option, index) => (
            <button
            key={index}
            className={`option-btn ${selectedAnswer === option ? "selected" : ""}`}
            onClick={() => onSelect(option)}
            >
          {option}
            </button>
        ))}

    </div>
  );
};

export default TestQuestion;