import React from "react";
import Button from "@mui/material/Button";

import { useSelector } from "react-redux";

const Answers = ({ question, answerClicked }) => {
  const { lessAnswers, flip, hideLetters } = useSelector(
    (store) => store.options
  );
  const { isClicked } = useSelector((store) => store.utils);
  const questionSubject = flip ? "country" : "capital";

  return !lessAnswers ? (
    <div>
      {question.answers.map((answer) => {
        const buttonText = answer[questionSubject];
        return (
          <Button
            key={answer.id}
            variant="contained"
            color={
              isClicked && answer.isCorrect
                ? "success"
                : isClicked && !answer.isCorrect && answer.color
                ? "error"
                : "primary"
            }
            onClick={() => {
              answer.color = true;
              answerClicked(answer.isCorrect);
            }}
            sx={{
              width: 300,
              height: 60,
              margin: 0.5,
              fontSize: 16,
              lineHeight: "normal",
              letterSpacing: 1.5,
            }}
          >
            {!hideLetters
              ? buttonText
              : hideLetters && answer.isCorrect && isClicked
              ? buttonText
              : buttonText[0] +
                "*".repeat(buttonText.length - 2) +
                buttonText.slice(-1)}
          </Button>
        );
      })}
    </div>
  ) : (
    <div>
      {question.answers.map((answer) => {
        const buttonText = answer[questionSubject];
        return (
          !answer.toHide && (
            <Button
              key={answer.id}
              variant="contained"
              color={
                isClicked && answer.isCorrect
                  ? "success"
                  : isClicked && !answer.isCorrect && answer.color
                  ? "error"
                  : "primary"
              }
              onClick={() => {
                answer.color = true;
                answerClicked(answer.isCorrect);
              }}
              disabled={false}
              sx={{
                width: 300,
                height: 60,
                margin: 0.5,
                fontSize: 16,
                lineHeight: "normal",
                letterSpacing: 1.5,
              }}
            >
              {!hideLetters
                ? buttonText
                : hideLetters && answer.isCorrect && isClicked
                ? buttonText
                : buttonText[0] +
                  "*".repeat(buttonText.length - 2) +
                  buttonText.slice(-1)}
            </Button>
          )
        );
      })}
    </div>
  );
};

export default Answers;
