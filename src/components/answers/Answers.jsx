import React from "react";
import Button from "@mui/material/Button";

const Answers = (props) => {
  const questionSubject = props.flip ? "country" : "capital";

  return !props.lessAnswers ? (
    <div>
      {props.question.answers.map((answer) => {
        // console.log(answer);
        return (
          <>
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
              
              // disabled={props.isClicked ? true : false}
              sx={{
                width: 300,
                height: 60,
                margin: 0.5,
                fontSize: 16,
                lineHeight: "normal"
              }}
              key={answer.id}
            >
              {answer[questionSubject]}
            </Button>
            
          </>
        );
      })}
    </div>
  ) : (
    <div>
      {props.question.answers.map((answer) => {
        return (
          !answer.toHide && (
            <>
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
                width: 300,
                height: 60,
                margin: 0.5,
                fontSize: 16,
                lineHeight: "normal"
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
