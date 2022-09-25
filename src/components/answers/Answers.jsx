import React from 'react'
import Button from "@mui/material/Button";

const Answers = (props) => {

  const questionSubject = props.flip ? "country" : "capital";

  return (
    <div>
        {props.question.answers.map((answer) => {
        return (
          <Button
            variant="contained"
            onClick={() => props.answerClicked(answer.isCorrect)}
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
        );
      })}
    </div>
  )
}

export default Answers