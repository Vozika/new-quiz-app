import React from "react";
import { useSelector } from "react-redux";

import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const Finish = ({ playAgain, startAgain }) => {
  const { numberOfQuestions, ironMan } = useSelector((store) => store.options);
  const { rightAnswer } = useSelector((store) => store.score);
  const longestStreak = localStorage.getItem("ironManStreak");

  return (
    <div>
      <Typography variant="h1">Finish!</Typography>
      <Typography variant="h5">
        {rightAnswer} out of {numberOfQuestions} questions correct.
      
      {ironMan && (
        <> Your longest Iron Man Mode win streak is {longestStreak} questions.</>
          
        
      )}
</Typography>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="baseline"
        spacing={1}
        sx={{ marginTop: 0 }}
      >
        <Button
          variant="contained"
          size="large"
          sx={{
            height: 60,
            fontSize: 16,
            marginTop: "2em",
            lineHeight: "normal",
          }}
          onClick={playAgain}
        >
          Play Again
        </Button>

        <Button
          variant="outlined"
          size="large"
          sx={{
            height: 60,
            fontSize: 16,
            marginTop: "2em",
            lineHeight: "normal",
          }}
          onClick={startAgain}
        >
          Back to Start
        </Button>
      </Stack>
    </div>
  );
};

export default Finish;
