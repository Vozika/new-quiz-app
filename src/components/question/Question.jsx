import React from "react";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import Fade from "@mui/material/Fade";

import { useSelector } from "react-redux";

const Question = ({
    
  question,
  
  
}) => {

  const {numberOfQuestions, flip} = useSelector((store) => store.options);
  const { currentQuestion } = useSelector((store) => store.score);
  const { showFade } = useSelector((store) => store.utils);

  if (!flip) {
    return (
      <div>
        <Chip
          variant="outlined"
          label={`${currentQuestion} out of ${numberOfQuestions}`}
          sx={{
            height: 40,
            width: 140,
            fontSize: 18,
            borderRadius: 40,
          }}
        />

        <Typography variant="h4" sx={{ marginTop: 1 }}>
          {question.question}
        </Typography>

        <Fade
          in={showFade}
          timeout={{
            appear: 0,
            enter: 350,
            exit: 350,
          }}
        >
          <Typography
            variant="h1"
            color="primary"
            sx={{ marginBottom: "0.2em", fontSize: "calc(3vw + 30px)" }}
          >
            <div>{question.item}?</div>
          </Typography>
        </Fade>
      </div>
    );
  } else {
    return (
      <div>
        <Chip
          variant="outlined"
          label={`${currentQuestion} out of ${numberOfQuestions}`}
          sx={{
            height: 40,
            width: 140,
            fontSize: 18,
            borderRadius: 40,
          }}
        />

        <Fade
          in={showFade}
          timeout={{
            appear: 0,
            enter: 350,
            exit: 350,
          }}
        >
          <Typography
            variant="h1"
            color="primary"
            sx={{ fontSize: "calc(3vw + 30px)", marginTop: 1 }}
          >
            {question.item}
          </Typography>
        </Fade>

        <Typography variant="h4" sx={{ marginBottom: 1 }}>
          {question.question}
        </Typography>
      </div>
    );
  }
};

export default Question;
