import { useState, useEffect } from "react";
import React from "react";
import { LFQ } from "../model/LeadFormularModel";
import style from "../../styles/priceStyle.module.css";

const questions: React.FC = () => {
  const [question, setQuestions] = useState<LFQ[]>([]);
  const [activeQuestionNumber, setActiveQuestionNumber] = useState<number>(0);

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_BASEPATH + "api/LeadFormular")
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data);
      })
      .catch((err) => console.error(err));
  }, []);
  function setValue(x: number) {
    if (activeQuestionNumber + x > question.length - 1) {
      setActiveQuestionNumber(0);
    } else if (activeQuestionNumber + x < 0) {
      setActiveQuestionNumber(question.length + x);
    } else {
      setActiveQuestionNumber(activeQuestionNumber + x);
    }
  }

  return (
    <>
      <div>
        {question.map((questions, index) => {
          if (index === activeQuestionNumber) {
            return (
              <div>
                <h3 key={index}>{questions.question}</h3>
                <input
                  type="radio"
                  name="lead_formular"
                  value={questions.answer1Value}
                />
                <label>{questions.answer1}</label>
                <input
                  type="radio"
                  name="lead_formular"
                  value={questions.answer2Value}
                />
                <label>{questions.answer2}</label>
                <input
                  type="radio"
                  name="lead_formular"
                  value={questions.answer3Value}
                />
                <label>{questions.answer3}</label>
                <button onClick={() => setValue(-1)}>tilbage</button>
                <button onClick={() => setValue(1)}>fremad</button>
              </div>
            );
          }
        })}
      </div>
    </>
  );
};

export default questions;
