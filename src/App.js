import { useState } from "react";
import "./App.css";
import initialData from "./id_data";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";
import Fade from "@mui/material/Fade";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import Chip from "@mui/material/Chip";
import CardHeader from "@mui/material/CardHeader";
import { red } from "@mui/material/colors";
import CardContent from "@mui/material/CardContent";
import SettingsIcon from "@mui/icons-material/Settings";
import Answers from "./components/answers/Answers";
import { borderRadius } from "@mui/system";
import Divider from "@mui/material/Divider";

const Data = initialData.map((item) => ({ ...item }));

function App() {
  const [flip, setFlip] = useState(false);
  const [show5050, setShow5050] = useState(false);
  const [showFade, setShowFade] = useState(true);
  const [slicedItemsFromData, setSlicedItemsFromData] = useState([]);
  let questionItself = !flip
    ? "What is the capital of"
    : "is the capital of which country?";

  const [question, setQuestion] = useState({
    question: questionItself,
    item: "",
    answers: [
      {
        capital: "",
        id: "",
        country: "",
      },
    ],
  });
  const [lessAnswers, setLessAnswers] = useState(false);
  const [numberOfAnswers, setNumberOfAnswers] = useState(4);
  const [score, setScore] = useState(0);
  const [rightAnswer, setRightAnswer] = useState(0);
  const [wrongAnswer, setWrongAnswer] = useState(0);
  const [start, setStart] = useState(true);
  const [main, setMain] = useState(false);
  const [finish, setFinish] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [numberOfQuestions, setNumberOfQuestions] = useState(10);
  const [isClicked, setIsClicked] = useState(false);

  // Standart function for a random number
  function getRandom(a) {
    const randomNumber = Math.floor(Math.random() * a);
    return randomNumber;
  }

  let answers = [];

  function mainAction() {
    if (currentQuestion === numberOfQuestions && main) {
      setTimeout(() => {
        setCurrentQuestion(0);
        setMain(false);
        setFinish(true);
      }, 350);

      return;
    }

    // setTimeout(() => {
    setShowFade(true);
    // }, 10);
    setIsClicked(false);
    setLessAnswers(false);
    setCurrentQuestion(currentQuestion + 1);

    Data.map((item) => (item.toHide = false));
    Data.map((item) => (item.color = false));

    let randomNumber = null;
    let questionItem = {};
    const questionSubject = flip ? "capital" : "country";

    function checkSlicedItems() {
      randomNumber = getRandom(Data.length);
      questionItem = Data.slice(randomNumber, randomNumber + 1)[0];

      const match = slicedItemsFromData.find(
        (item) => item[questionSubject] === questionItem[questionSubject]
      );

      if (match === undefined) {
        questionItem.isCorrect = true;
        slicedItemsFromData.push(questionItem);
      } else {
        checkSlicedItems();
      }
    }

    checkSlicedItems();
    console.log(slicedItemsFromData);

    const set = new Set();

    function fakeAnswers() {
      const random = getRandom(Data.length);

      if (random !== randomNumber) {
        set.add(random);
      } else {
        fakeAnswers();
      }
    }

    while (set.size < numberOfAnswers - 1) {
      fakeAnswers();
    }

    const fakeAnswersArray = Array.from(set);
    answers = fakeAnswersArray.map((item) => Data.slice(item, item + 1)[0]);
    answers.map((item) => (item.isCorrect = false));
    answers[0].toHide = true;
    answers[1].toHide = true;

    answers.push(questionItem);

    console.log(answers);

    answers.sort(function () {
      return 0.5 - Math.random();
    });

    //Adding everything to a state object
    setQuestion((prevQuestion) => ({
      ...prevQuestion,
      question: questionItself,
      item: questionItem[questionSubject],
      answers: answers,
    }));

    if (slicedItemsFromData.length === Data.length) {
      setSlicedItemsFromData([]);
    }
  }

  function answerClicked(isCorrect) {
    if (!isClicked) {
      if (isCorrect) {
        setScore(score + 1);
        setRightAnswer(rightAnswer + 1);
      } else {
        setWrongAnswer(wrongAnswer + 1);
      }

      setShowFade(false);
      setTimeout(() => {
        mainAction();
      }, 700);
    }

    setIsClicked(true);
  }

  function startQuiz() {
    setStart(false);
    setMain(true);
    mainAction();
  }

  function startAgain() {
    setFlip(false);
    setShow5050(false);
    setCurrentQuestion(0);
    setRightAnswer(0);
    setWrongAnswer(0);
    setScore(0);
    setNumberOfQuestions(10);
    setFinish(false);
    setStart(true);
    setMain(false);
  }

  function playAgain() {
    setRightAnswer(0);
    setWrongAnswer(0);
    setScore(0);
    setFinish(false);
    setMain(true);
    mainAction();
  }

  return (
    <div className="App">
      <div className="container">
        {start && (
          <>
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
                  

                  <Divider
                  sx={{margin: "0.5em 0"}}
                  />
                  
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
                  
                  <Divider
                  sx={{margin: "0.7em 0"}}
                  />
                  
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
          </>
        )}

        {main && (
          <>
            {!flip && (
              <div>
                {/* <Typography variant="h5" sx={{ marginBottom: "0.55em" }}>
                  Question {currentQuestion} out of {numberOfQuestions}
                </Typography> */}

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
            )}

            {flip && (
              <div>
                {/* <Typography variant="h5" sx={{ marginBottom: "0em" }}>
                  Question {currentQuestion} out of {numberOfQuestions}
                </Typography> */}

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
            )}

            <Answers
              question={question}
              flip={flip}
              answerClicked={answerClicked}
              lessAnswers={lessAnswers}
              isClicked={isClicked}
              numberOfAnswers={numberOfAnswers}
            />

            <br />

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
                {/* <ThumbUpIcon fontSize="large" /> */}
                <Avatar sx={{ width: 60, height: 60 }}>{rightAnswer}</Avatar>
              </Stack>

              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={2}
              >
                <Typography variant="h5">Wrong</Typography>
                {/* <ThumbDownIcon fontSize="large" /> */}
                <Avatar sx={{ width: 60, height: 60 }}>{wrongAnswer}</Avatar>
              </Stack>
            </Stack>

            {/* <Typography variant="h5">Score: {score}</Typography> */}

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
          </>
        )}

        {finish && (
          <>
            <Typography variant="h1">Finish!</Typography>
            <Typography variant="h4">
              {rightAnswer} out of {numberOfQuestions} questions correct.
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
                sx={{ height: 60, fontSize: 16, marginTop: "2em", lineHeight: "normal" }}
                onClick={playAgain}
              >
                Play Again
              </Button>

              <Button
                variant="outlined"
                size="large"
                sx={{ height: 60, fontSize: 16, marginTop: "2em", lineHeight: "normal" }}
                onClick={startAgain}
              >
                Back to Start
              </Button>
            </Stack>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
