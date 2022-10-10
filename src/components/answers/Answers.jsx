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
        const result = !hideLetters
          ? answer[questionSubject]
          : hideLetters && answer.isCorrect && isClicked
          ? answer[questionSubject]
          : answer[questionSubject][0] +
            "*".repeat(answer[questionSubject].length - 2) +
            answer[questionSubject].slice(-1);

        return (
          <>
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
                console.log(answer.capital.length);
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
              {result}
            </Button>
          </>
        );
      })}
    </div>
  ) : (
    <div>
      {question.answers.map((answer) => {
        const result = !hideLetters
          ? answer[questionSubject]
          : hideLetters && answer.isCorrect && isClicked
          ? answer[questionSubject]
          : answer[questionSubject][0] +
            "*".repeat(answer[questionSubject].length - 2) +
            answer[questionSubject].slice(-1);
            
        return (
          !answer.toHide && (
            <>
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
                {result}
              </Button>
            </>
          )
        );
      })}
    </div>
  );
};

export default Answers;
