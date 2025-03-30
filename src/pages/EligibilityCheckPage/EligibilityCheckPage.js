import React, { useState } from 'react';
import './EligibilityCheckPage.css';

function EligibilityCheckPage() {
    const [marks, setMarks] = useState("");
    const [examScore, setExamScore] = useState("");
    const [isEligible, setIsEligible] = useState(null);

    const checkEligibility = () => {
        if (marks >= 75 && examScore >= 50) {
            setIsEligible(true);
        } else {
            setIsEligible(false);
        }
    };

  return (
    <div className='eligibility-container'>
        <h2>Check Your Eligibility</h2>

        <label className='eligibility-label'>Enter Your Percentage (%):</label>
        <input 
           type='number'
           className='eligibility-input'
           value={marks}
           onChange={(e) => setMarks(e.target.value)}
           placeholder='Enter Marks'
        />

       <label className='eligibility-label'>Enter Your Percentage (%):</label>
        <input 
           type='number'
           className='eligibility-input'
           value={examScore}
           onChange={(e) => setExamScore(e.target.value)}
           placeholder='Enter Exam Score'
        />

        <button className='eligibility-btn' onClick={checkEligibility}>
            Check Eligibility
        </button>

        {isEligible !== null && (
            <h3 className={`eligibility-result ${isEligible ? "eligible" : "not-eligible "}`}>
                {isEligible ? "You are Eligible!" : "Not Eligible"}
            </h3>
        )}
      
    </div>
  );
};

export default EligibilityCheckPage;
