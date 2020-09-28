import React from 'react';
//Components
import QuizTitle from './QuizTitle'
import Q1 from './Q1'
import Q2 from './Q2'

const Quiz = () => {
  return (
    <div className="quiz-container">
      <QuizTitle/>
      <Q1/>
      <Q2/>
    </div>
  );
}

// Export Component -> make it available for other files in app
// Use in other file -> import Component from './Component'
export default Quiz;
