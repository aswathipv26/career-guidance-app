import React, { useState } from 'react';
import './AptitudeTestPage.css';
import TestQuestion from '../../components/TestQuestion/TestQuestion';

const AptitudeTestPage = () => {
    const questions = [
        {
            question: "What type of tasks do you enjoy the most",
            options: ["Creative", "Logical", "Analytical", "Helping Others"],
            key: "q1",
        },
        {
            question: "Which subject do you like the most",
            options: ["Maths", "Science", "English", "Social Studies"],
            key: "q2",
        },
        {
            question: "What kind of work environment do you prefer",
            options: ["Independent", "Teamwork", "Hands-on", "Structured"],
            key: "q3",
        },
    ];

    const [answers, setAnswers] = useState([]);
    const [result, setResult] = useState("");

    const handleSelect = (questionkey, option) => {
        setAnswers((prev) => ({...prev, [questionkey]: option}));
    };

    const handleSubmit = () => {
        if(Object.keys(answers).length < questions.length) {
            setResult("Please answer all questions before submitting.");
            return;
        }

        let careerSuggestion = "Based on your answers, you may consider:"
        if (answers.q1 === "Creative") {
            careerSuggestion += "Design, Art or Marketing"
        } else if (answers.q1 === "Logical") {
            careerSuggestion += "Engineering, IT or Software Development"
        } else if (answers.q1 === "Analytical") {
            careerSuggestion += "Finance, DataScience or Research"
        } else {
            careerSuggestion += "Teaching Psychology or Healthcare"
        }
        
        setResult(careerSuggestion);
    };


  return (
    <div className='aptitude-container'>
        <h2>Aptitude Test</h2>
            {questions.map((q) => (
                   <TestQuestion 
                   key={q.key}
                   question={q.question}
                   options={q.options}
                   selectedAnswer={answers[q.key]}
                   onSelect={(option) => handleSelect(q.key, option)}
                   />
                ))}
       
        <button className='submit-btn' onClick={handleSubmit}>Submit Test</button>
        {result && <p className='result-message'>{result}</p>}
        
    </div>
  );
};

export default AptitudeTestPage;