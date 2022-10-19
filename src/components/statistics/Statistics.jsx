import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { useSelector } from "react-redux";

const style = {
  textAlign: "center",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "min(100%, 700px)",
  bgcolor: "background.paper",
  border: "1px solid #bdbdbd",
  boxShadow: 24,
  p: 3,
};

const Statistics = () => {

  const { interfaceText } = useSelector(
    (store) => store.options
  );

  return (
    
      <Box sx={style}>
        <Typography variant="h2">{interfaceText.STATISTICS}</Typography>
        <Typography sx={{ fontSize: 20 }}>
          {interfaceText.All_TIME_RIGHT_ANSWERS} {localStorage.rightAnswers}
          <br />
          {interfaceText.All_TIME_WRONG_ANSWERS} {localStorage.wrongAnswers}
          <br />
          {Math.round(
            (Number(localStorage.rightAnswers) /
              (Number(localStorage.rightAnswers) +
                Number(localStorage.wrongAnswers))) *
              100
          )}
          {interfaceText.RIGHT_ANSWERS_ON_AVERAGE}
          <br />
          {interfaceText.LONGEST_IRON_MAN}
          {localStorage.ironManStreak}
        </Typography>
      </Box>
    
  );
};

export default Statistics;
