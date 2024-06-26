

import React, { useState, useEffect } from "react";
//import { Link } from "react-router-dom";
//import { useHistory } from "react-router-dom";
import questions from "./QuestionData.js";
import { Link } from 'react-router-dom'
// import { Radio } from "@material-ui/core";


import "./QuestionData.css"

function Quiz() {

  //  **********************************ECS button Code******************************************************************
  


  //  ****************************************************************************************************
  const [option, setOption] = useState("");
  const handleOption = (e) => {
    setOption(e.target.value);
  };
  function deSelect() {
    var ele = document.getElementsByClassName("option");
    for (var i = 0; i < ele.length; i++) {
      if (ele[i].type === "radio") ele[i].checked = false;
    }
  }

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(5);
  const [count4, setCount4] = useState(6);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  function Increase() {
    setCount(count + 1);
  }
  function Increase1() {
    setCount1(count1 + 1);
  }
  function Increase2() {
    setCount2(count2 + 1);
  }
  function DIncrease() {
    if (count3 < questions.length) {
      setCount3(count3 - 1);
    } else {
      setCount3(count3 === 0);
    }
  }
  function DIncrease1() {
    setCount4(count4 - 1);
  }

// ************************* Submit Exam Warning **************************************************************************

  function submitAndClose() {
    // Show warning message before closing
    if (window.confirm("Are you sure you want to submit and close?")) {
      // Perform submit action and redirect to home page
      // ...
    }
    // Exit full screen mode if currently active
    if (document.fullscreenElement) {
      document.exitFullscreen();
    }
    
  }

  // *****************************************************************************************

  return (
    <div>
      <div className="question-box">
        <div className="questionchange">
          <h1>Question. {currentQuestion + 1}</h1>
          <br />
          <hr />{" "}
          <p className="questiontext">
            {questions[currentQuestion].questionText}
            <sup></sup>
          </p>
          <br />
          {questions[currentQuestion].answerOptions.map((answerOption) => (
            <div className="answer">
              <input
                type="radio"
                className="option"
                color="primary"
                value="option1"
              />
              <span> {answerOption.answerText}</span>
            </div>
          ))}
        </div>
        <br />
        <div className="buttons">
          <button
            onClick={(event) => [
              handleAnswerOptionClick(),
              Increase(),
              DIncrease(),
              DIncrease1()
            ]}
            className="button button1"
          >
            {" "}
            SAVE & NEXT
          </button>
          <button onClick={deSelect} className="button button2">
            CLEAR RESPONSE
          </button>
          <button
            onClick={(event) => [handleAnswerOptionClick(), Increase1()]}
            className="button button3"
          >
            MARK FOR REVIEW
          </button>
          <button
            onClick={(event) => [handleAnswerOptionClick(), Increase2()]}
            className="button button4"
          >
            SAVE & MARK FOR REVIEW
          </button>
          <Link to="/">
          <button className="button button5" onClick={submitAndClose}>SUBMIT & CLOSE</button>
          </Link>
        </div>
      </div>
      <div className="buttons-box">
        <button className="nv" name="Not Visited">
          {count3}
        </button>
        <p className="gray">Not Visited</p>
        <button className="na" name="Not Answered">
          {count4}
        </button>
        <p className="red">Not Answered</p>
        <button className="amr" name="Answered & Marked for Review">
          {count2}
        </button>
        <p className="yellow">Answered & Marked for Review</p>
        <button className="a" name="Answered">
          {count}
        </button>
        <p className="green">Answered</p>
        <button className="mr" name="Marked for Review">
          {count1}
        </button>
        <p className="blue">Marked for Review</p>
      </div>
      <div className="mark-box">
        <div className="card mb-3">
          <div
            className="card-body"
            style={{
              display: "flex",
              padding: 10,
              flexWrap: "wrap"
            }}
          >
            {questions.map((item, index) => (
              <div
                key={index}
                className="question-no"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: 40,
                  width: 40,
                  marginRight: 19,
                  marginBottom: 5,

                  cursor: "pointer",
                  backgroundColor:
                    index === currentQuestion
                      ? "#B4C6A6"
                      : item?.selected
                      ? "grey"
                      : "#EAEAEA"
                }}
                onClick={() => setCurrentQuestion(index)}
              >
                {index + 1}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quiz;


//***************************** updated code ******************************************************** */

