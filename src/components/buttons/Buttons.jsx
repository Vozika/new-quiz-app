import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const Buttons = ({ show5050, setLessAnswers, startAgain }) => {
  return (
    <div>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="baseline"
        spacing={1}
        sx={{ marginTop: 3.5 }}
      >
        {show5050 && (
          <Button
            variant="outlined"
            size="large"
            sx={{ height: 60, fontSize: 16 }}
            onClick={() => {
              setLessAnswers((prev) => !prev);
            }}
          >
            50/50
          </Button>
        )}

        <Button
          variant="outlined"
          size="large"
          sx={{ height: 60, fontSize: 16 }}
          onClick={startAgain}
        >
          Back to Start
        </Button>
      </Stack>
    </div>
  );
};

export default Buttons;
