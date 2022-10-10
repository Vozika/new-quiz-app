import React from "react";
import Button from "@mui/material/Button";

import { useSelector } from "react-redux";

const Answers = ({ question, answerClicked }) => {
  const { lessAnswers, flip } = useSelector((store) => store.options);
  const { isClicked } = useSelector((store) => store.utils);
  const questionSubject = flip ? "country" : "capital";

  return !lessAnswers ? (
    <div>
      {question.answers.map((answer) => {
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
              }}
              sx={{
                width: 300,
                height: 60,
                margin: 0.5,
                fontSize: 16,
                lineHeight: "normal",
              }}
            >
              {answer[questionSubject]}
            </Button>
          </>
        );
      })}
    </div>
  ) : (
    <div>
      {question.answers.map((answer) => {
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
                }}
              >
                {answer[questionSubject]}
              </Button>
            </>
          )
        );
      })}
    </div>
  );
};

export default Answers;
