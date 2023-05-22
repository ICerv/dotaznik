import React, { useState } from 'react';
import QuestionBody from '../QuestionBody/index';
import Option from '../Option/index';
import './style.css';

const Question = ({ text }) => {
  // const [answered, setAnswered] = useState(false)
  const [answer, setAnswer] = useState('symbolQuestion');


  const handleSelect = (iconType) => {
    setAnswer(iconType)
  }


  return (
    <div className="question">
      <QuestionBody
        iconType={answer}
        // iconType={answered ? "symbolTick" : "symbolQuestion"}
        text={text}
      />
      <div className="question__options">
        <Option type="smileyStrongYes" text="Souhlasím" onSelected={handleSelect} />
        <Option type="smileyYes" text="Spíše souhlasím" iconType="symbolTick" onSelected={handleSelect} />
        <Option type="smileyNeutral" text="Nevím" iconType="symbolTick" onSelected={handleSelect} />
        <Option type="smileyNo" text="Spíše nesouhlasím" iconType="symbolTick" onSelected={handleSelect} />
        <Option type="smileyStrongNo" text="Nesouhlasím" iconType="symbolTick" onSelected={handleSelect} />
      </div>
    </div>
  );
};

export default Question;
