import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleClose, handleOpen } from "../../features/modal/modalSlice";
import { setShow5050 } from "../../features/options/optionsSlice";

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

const Start = ({
  Data,
  setNumberOfQuestions,
  setSlicedItemsFromData,
  
  startQuiz,
  setFlip,
}) => {
  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  const dispatch = useDispatch();
  const {open} = useSelector((store) => store.modal);
  // const {show5050} = useSelector((store) => store.options);
  
  return (
    <div>
      <Typography variant="h1" sx={{ fontSize: "calc(3vw + 30px)" }}>
        Capital Quiz 2.0
      </Typography>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={() => dispatch(handleClose())}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Card sx={{margin: 2}}>
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
      </Modal>

      

      <Button
        variant="contained"
        size="large"
        sx={{ height: 60, fontSize: 18, marginTop: 2 }}
        onClick={startQuiz}
      >
        Start the Quiz!
      </Button><br />
      <Button
        variant="outlined"
        size="large"
        sx={{ height: 60, fontSize: 18, marginTop: 2 }}
        onClick={() => dispatch(handleOpen())}
      >
        Options
      </Button>
    </div>
  );
};

export default Start;
