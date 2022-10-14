import React from "react";
import Button from "@mui/material/Button";

import { useSelector } from "react-redux";

const Answers = ({ question, answerClicked }) => {
  const { lessAnswers, flip, hideLetters } = useSelector(
    (store) => store.options
  );
  const { isClicked } = useSelector((store) => store.utils);
  const questionSubject = flip ? "country" : "capital";
  const style = {
    width: 300,
    height: 60,
    margin: 0.5,
    fontSize: 16,
    lineHeight: "normal",
    letterSpacing: 1.5,
  };

  return (
    <div>
      {question.answers.map((answer) => {
        const buttonText = answer[questionSubject];
        const hiddenButtonText =
          buttonText[0] +
          "*".repeat(buttonText.length - 2) +
          buttonText.slice(-1);
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
              ...style,
              display: answer.toHide && lessAnswers ? "none" : "inline",
            }}
          >
            {!hideLetters
              ? buttonText
              : hideLetters && answer.isCorrect && isClicked
              ? buttonText
              : hiddenButtonText}
          </Button>
        );
      })}
    </div>
  );
};

export default Answers;
