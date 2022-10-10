import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleClose, handleOpen } from "../../features/modal/modalSlice";
import {
  setShow5050,
  setShow5050False,
  setFlip,
  setNumberOfQuestions,
  setIronManTrue,
  setIronManModalTrue,
  setIronManModalFalse,
} from "../../features/options/optionsSlice";

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
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

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

const Start = ({ Data, slicedItemsFromData, startQuiz, testItem }) => {
  const dispatch = useDispatch();
  const { open } = useSelector((store) => store.modal);
  const { ironManModal } = useSelector((store) => store.options);

  function sliced() {
    slicedItemsFromData.length = 0;
  }

  return (
    <div>
      <Typography variant="h1" sx={{ fontSize: "calc(3vw + 30px)", marginBottom: 3 }}>
        Capital Quiz 2.0
      </Typography>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={() => {
          dispatch(handleClose());
          dispatch(setIronManModalFalse());
        }}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <>
          {!ironManModal && (
            <Fade in={open}>
              <Box sx={style}>
                <Card sx={{ margin: 2 }}>
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
                            dispatch(setNumberOfQuestions(Data.length));
                            sliced();
                            console.log(slicedItemsFromData);
                          }}
                        />
                        <FormControlLabel
                          value={15}
                          control={<Radio />}
                          label="15"
                          onChange={() => {
                            dispatch(setNumberOfQuestions(15));
                          }}
                        />
                        <FormControlLabel
                          value={10}
                          control={<Radio />}
                          label="10"
                          onChange={() => {
                            dispatch(setNumberOfQuestions(10));
                          }}
                        />
                        <FormControlLabel
                          value={5}
                          control={<Radio />}
                          label="5"
                          onChange={() => {
                            dispatch(setNumberOfQuestions(5));
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
                          dispatch(setFlip());
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
                        onChange={() => dispatch(setShow5050())}
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
              </Box>
            </Fade>
          )}

          {ironManModal && (
            <>
              <Fade in={open}>
                <Box sx={style}>
                  <Typography variant="h2">Iron Man Mode</Typography>
                  <Typography sx={{ fontSize: "1.3rem", margin: 2}}>
                    195 questions. 50/50 doesn't work. One wrong answer and you
                    lose. How long can you stand?
                  </Typography>
                  <Button
                    variant="contained"
                    size="large"
                    sx={{ height: 60, fontSize: 16, marginTop: 0 }}
                    onClick={() => {
                      dispatch(setIronManTrue());
                      dispatch(setNumberOfQuestions(Data.length));
                      dispatch(setShow5050False());
                      sliced();
                      startQuiz();
                    }}
                  >
                    I want to know
                  </Button>
                </Box>
              </Fade>
            </>
          )}
        </>
      </Modal>

      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={1}
      >
        <Button
          variant="contained"
          sx={{ width: "50%", height: 60, fontSize: 16, lineHeight: "normal" }}
          onClick={startQuiz}
        >
          Normal Quiz
        </Button>

        <Button
          variant="contained"
          sx={{
            width: "50%", 
            height: 60,
            fontSize: 16,
            lineHeight: "normal",
            backgroundColor: "gray",
            "&:hover": { backgroundColor: "black" },
          }}
          onClick={() => {
            dispatch(setIronManModalTrue());
            dispatch(handleOpen());
          }}
        >
          Iron Man Mode
        </Button>
      </Stack>
      <br />
      <Button
        variant="outlined"
        size="large"
        sx={{ height: 60, fontSize: 16, marginTop: 2 }}
        onClick={() => {
          dispatch(setIronManModalFalse());
          dispatch(handleOpen());
        }}
      >
        Options
      </Button>
    </div>
  );
};

export default Start;
