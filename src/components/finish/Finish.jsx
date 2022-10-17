import React from "react";
import { useSelector } from "react-redux";

import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";
import Avatar from "@mui/material/Avatar";

const Finish = ({ playAgain, startAgain }) => {
  const longestStreak = localStorage.getItem("ironManStreak");
  const { numberOfQuestions, ironMan, interfaceText } = useSelector(
    (store) => store.options
  );
  const { rightAnswer } = useSelector((store) => store.score);
  const { showFade } = useSelector((store) => store.utils);

  const perCent = Math.round((rightAnswer / numberOfQuestions) * 100);

  return (
    <div>
      <Fade
        in={showFade}
        timeout={{
          appear: 0,
          enter: 350,
          exit: 350,
        }}
      >
        <Stack direction="row" justifyContent="center" alignItems="baseline">
          <Avatar
            sx={{
              width: 128,
              height: 128,
              bgcolor:
                perCent === 100
                  ? "#2e7d32"
                  : perCent < 50
                  ? "#d32f2f"
                  : "#1976d2",
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              {perCent}%
            </Typography>
          </Avatar>
        </Stack>
      </Fade>
      <br />
      <Typography variant="h5">
        {rightAnswer} {interfaceText.OUT_OF} {numberOfQuestions}{" "}
        {interfaceText.QUESTIONS_CORRECT}
        <br />
        {ironMan && (
          <>
            {interfaceText.LONGEST_STREAK_001}
            {longestStreak}
            {interfaceText.LONGEST_STREAK_002}
          </>
        )}
      </Typography>

      {ironMan && (
        <Button
          variant="outlined"
          sx={{
            width: "100%",
            height: 60,
            fontSize: 16,
            lineHeight: "normal",
            marginTop: 1,
            marginBottom: 1,
          }}
          onClick={() => localStorage.clear()}
        >
          {interfaceText.CLEAR_STREAK}
        </Button>
      )}

      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={1}
        sx={{ marginTop: 1 }}
      >
        <Button
          variant="contained"
          sx={{
            width: "50%",
            height: 60,
            fontSize: 16,
            lineHeight: "normal",
          }}
          onClick={playAgain}
        >
          {interfaceText.PLAY_AGAIN}
        </Button>

        <Button
          variant="outlined"
          sx={{
            width: "50%",
            height: 60,
            fontSize: 16,
            lineHeight: "normal",
          }}
          onClick={startAgain}
        >
          {interfaceText.BACK_TO_START}
        </Button>
      </Stack>
    </div>
  );
};

export default Finish;
