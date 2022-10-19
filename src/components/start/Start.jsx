import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleClose, handleOpen } from "../../features/modal/modalSlice";
import {
  setShow5050False,
  setNumberOfQuestions,
  setIronManTrue,
  setIronManModalTrue,
  setIronManModalFalse,
  setRU,
  setInterfaceText,
  setStatisticsTrue,
  setStatisticsFalse,
  setOptionsTrue,
  setOptionsFalse,
} from "../../features/options/optionsSlice";

import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

import Stack from "@mui/material/Stack";

import { interfaceRU } from "../../interface";
import { interfaceEN } from "../../interface";
import Statistics from "../statistics/Statistics";
import Options from "../options/Options";

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

const button = {
  height: 60,
  fontSize: 16,
  marginTop: 0,
  width: "100%",
  lineHeight: "normal",
};

const Start = ({ Data, slicedItemsFromData, startQuiz }) => {
  const dispatch = useDispatch();
  const { open } = useSelector((store) => store.modal);
  const { ironManModal, RU, interfaceText, statistics, options } = useSelector(
    (store) => store.options
  );

  function sliced() {
    slicedItemsFromData.length = 0;
  }

  useEffect(() => {
    if (!RU) {
      dispatch(setInterfaceText(interfaceEN));
    }
  });

  useEffect(() => {
    if (RU) {
      dispatch(setInterfaceText(interfaceRU));
    }
  });

  return (
    <div>
      <Typography
        variant="h1"
        sx={{ fontSize: "calc(3vw + 30px)", marginBottom: 3 }}
      >
        {interfaceText.MAIN_TITLE}
      </Typography>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={() => {
          dispatch(handleClose());
          dispatch(setIronManModalFalse());
          dispatch(setStatisticsFalse());
          dispatch(setOptionsFalse());
        }}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <>
          {options && (
            <Options
              Data={Data}
              slicedItemsFromData={slicedItemsFromData}
              startQuiz={startQuiz}
            />
          )}

          {ironManModal && (
            <Box sx={style}>
              <Typography variant="h2">
                {interfaceText.IRON_MAN_MODE}
              </Typography>
              <Typography sx={{ fontSize: 20, margin: 2 }}>
                {interfaceText.IRON_MAN_MODE_DESC}
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
                {interfaceText.I_WANT_TO_KNOW}
              </Button>
            </Box>
          )}

          {statistics && <Statistics />}
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
          {interfaceText.NORMAL_QUIZ}
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
          {interfaceText.IRON_MAN_MODE}
        </Button>
      </Stack>
      <br />
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={1}
      >
        <Button
          variant="outlined"
          sx={button}
          onClick={() => {
            dispatch(setIronManModalFalse());
            dispatch(setOptionsTrue());
            dispatch(handleOpen());
          }}
        >
          {interfaceText.OPTIONS}
        </Button>
        <Button
          variant="outlined"
          sx={button}
          onClick={() => {
            dispatch(setStatisticsTrue());
            dispatch(handleOpen());
          }}
        >
          {interfaceText.STATISTICS}
        </Button>
        <Button
          variant="outlined"
          sx={button}
          onClick={() => {
            dispatch(setRU());
          }}
        >
          {interfaceText.CHANGE_LANGUAGE}
        </Button>
      </Stack>
    </div>
  );
};

export default Start;
