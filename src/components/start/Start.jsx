import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Avatar from "@mui/material/Avatar";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import SettingsIcon from "@mui/icons-material/Settings";

import Divider from "@mui/material/Divider";

const Start = ({
  Data,
  setNumberOfQuestions,
  setSlicedItemsFromData,
  setShow5050,
  startQuiz,
  setFlip,
}) => {
  return (
    <div>
      <Typography variant="h1" sx={{ fontSize: "calc(3vw + 30px)" }}>
        Capital Quiz 2.0
      </Typography>

      <br />
      <Card>
        <CardHeader
          sx={{
            fontSize: "1.3rem",
            bgcolor: "#bdbdbd",
            margin: 0,
            textAlign: "left",
          }}
          disableTypography
          title="OPTIONS"
          avatar={
            <Avatar sx={{ bgcolor: "#dd3131" }} aria-label="options">
              <SettingsIcon />
            </Avatar>
          }
        ></CardHeader>
        <CardContent>
          <FormControl sx={{ margin: 0 }}>
            <FormLabel
              id="demo-row-radio-buttons-group-label"
              sx={{ margin: 0 }}
            >
              <Typography
                sx={{
                  marginTop: 0,
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "1.3rem",
                  fontWeight: "bold",
                  color: "black",
                }}
              >
                Number of questions
              </Typography>
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              sx={{
                margin: 0,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FormControlLabel
                value={Data.length}
                control={<Radio />}
                label={Data.length}
                onChange={() => {
                  setNumberOfQuestions(Data.length);
                  setSlicedItemsFromData([]);
                }}
              />
              <FormControlLabel
                value={15}
                control={<Radio />}
                label="15"
                onChange={() => {
                  setNumberOfQuestions(15);
                }}
              />
              <FormControlLabel
                value={10}
                control={<Radio />}
                label="10"
                onChange={() => {
                  setNumberOfQuestions(10);
                }}
              />
              <FormControlLabel
                value={5}
                control={<Radio />}
                label="5"
                onChange={() => {
                  setNumberOfQuestions(5);
                }}
              />
            </RadioGroup>

            <Divider sx={{ margin: "0.5em 0" }} />

            <FormControlLabel
              sx={{
                margin: 0,
                justifyContent: "center",
                alignItems: "center",
                fontSize: "1.3rem",
                fontWeight: "bold",
              }}
              disableTypography
              control={<Checkbox />}
              label="Flip the question"
              onChange={() => {
                setFlip((prevState) => !prevState);
              }}
            />
            <Typography sx={{ fontSize: "1.3rem", marginBottom: 0 }}>
              Now you know the capital. But what about the country?
            </Typography>

            <Divider sx={{ margin: "0.7em 0" }} />

            <FormControlLabel
              sx={{
                margin: 0,
                justifyContent: "center",
                alignItems: "center",
                fontSize: "1.3rem",
                fontWeight: "bold",
              }}
              disableTypography
              control={<Checkbox />}
              label="Show 50/50"
              onChange={() => {
                setShow5050((prevState) => !prevState);
              }}
            />
            <Typography sx={{ fontSize: "1.3rem", marginBottom: 0 }}>
              Let us give you a little help.
            </Typography>
          </FormControl>
        </CardContent>
      </Card>

      <Button
        variant="contained"
        size="large"
        sx={{ height: 60, fontSize: 18, marginTop: 2 }}
        onClick={startQuiz}
      >
        Start the Quiz!
      </Button>
    </div>
  );
};

export default Start;
