import React from "react";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

import { useSelector } from "react-redux";

const Counter = () => {
  const { rightAnswer, wrongAnswer } = useSelector((store) => store.score);

  return (
    <div>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Typography variant="h5">Right</Typography>
          <Avatar sx={{ width: 60, height: 60 }}>{rightAnswer}</Avatar>
        </Stack>

        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Typography variant="h5">Wrong</Typography>
          <Avatar sx={{ width: 60, height: 60 }}>{wrongAnswer}</Avatar>
        </Stack>
      </Stack>
    </div>
  );
};

export default Counter;
