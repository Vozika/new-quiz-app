import React from "react";
import Button from "@mui/material/Button";

const Answers = (props) => {
  const questionSubject = props.flip ? "country" : "capital";

  const handleClick = (e) => {
    console.log(e.currentTarget.styles);
    console.log(e.currentTarget);
    console.log(e.target);
  };

  return !props.lessAnswers ? (
    <div>
      {props.question.answers.map((answer) => {
        // console.log(answer);
        return (
          <Button
            variant="contained"
            color={
              props.isClicked && answer.isCorrect
                ? "success"
                : props.isClicked && !answer.isCorrect && answer.color
                ? "error"
                : "primary"
            }
            onClick={() => {
              answer.color = true;
              props.answerClicked(answer.isCorrect);
            }}
            key={answer.id}
            // disabled={props.isClicked ? true : false}
            sx={{
              width: 400,
              height: 80,
              margin: 1,
              fontSize: 20,
            }}
          >
            {answer[questionSubject]}
          </Button>
        );
      })}
    </div>
  ) : (
    <div>
      {props.question.answers.map((answer) => {
        return (
          !answer.toHide && (
            <Button
              variant="contained"
              color={
                props.isClicked && answer.isCorrect
                  ? "success"
                  : props.isClicked && !answer.isCorrect && answer.color
                  ? "error"
                  : "primary"
              }
              onClick={() => {
                answer.color = true;
                props.answerClicked(answer.isCorrect);
              }}
              key={answer.id}
              disabled={false}
              sx={{
                width: 400,
                height: 80,
                margin: 1,
                fontSize: 20,
              }}
            >
              {answer[questionSubject]}
            </Button>
          )
        );
      })}
    </div>
  );
};

export default Answers;
