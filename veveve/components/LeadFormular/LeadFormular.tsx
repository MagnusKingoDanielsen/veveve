import { useState, useEffect } from "react";
import React from "react";
import { LFQ } from "../model/LeadFormularModel";
import style from "../../styles/LeadFormular.module.css";

const questions: React.FC = () => {
  const [question, setQuestions] = useState<LFQ[]>([]);
  const [activeQuestionNumber, setActiveQuestionNumber] = useState<number>(0);
  const [leadFormularValue, setLeadFormularValue] = useState(0);
  const [hotLeadValue, setHotLeadValue] = useState(0);

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
      setActiveQuestionNumber(question.length - 1);
      setHotLeadValue(hotLeadValue + Number(leadFormularValue));
    } else if (activeQuestionNumber + x < 0) {
      setActiveQuestionNumber(0);
    } else {
      setActiveQuestionNumber(activeQuestionNumber + x);
      setHotLeadValue(hotLeadValue + Number(leadFormularValue));
    }
  }

  const onOptionChange = (e) => {
    setLeadFormularValue(e.target.value);
  };

  return (
    <>
      <div>
        {question.map((questions, index) => {
          if (index === activeQuestionNumber) {
            return (
              <div className={style.flex}>
                <h3 key={index}>{questions.question}</h3>
                <div>
                  <input
                    type="radio"
                    name="lead_formular"
                    value={questions.answer1Value}
                    onChange={onOptionChange}
                  />
                  <label>{questions.answer1}</label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="lead_formular"
                    value={questions.answer2Value}
                    onChange={onOptionChange}
                  />
                  <label>{questions.answer2}</label>
                </div>
                <div
                  className={
                    questions.answer3 == null ? style.none : style.show
                  }
                >
                  <input
                    type="radio"
                    name="lead_formular"
                    value={questions.answer3Value}
                    onChange={onOptionChange}
                  />

                  <label>{questions.answer3}</label>
                </div>
                <p>{leadFormularValue}</p>
                <p>{hotLeadValue}</p>
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
