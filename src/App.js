import { useState, useEffect } from "react";
import "./App.css";
import initialData from "./id_data";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import Fade from "@mui/material/Fade";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Answers from "./components/answers/Answers";

const Data = initialData.map((item) => ({ ...item }));

function App() {
  const [flip, setFlip] = useState(false);

  const [slicedItemsFromData, setSlicedItemsFromData] = useState([]);
  let questionItself = !flip
    ? "What is the capital of"
    : "is the capital of which country?";

  console.log(flip);

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
  const [numberOfAnswers, setNumberOfAnswers] = useState(4);
  const [score, setScore] = useState(0);
  const [rightAnswer, setRightAnswer] = useState(0);
  const [wrongAnswer, setWrongAnswer] = useState(0);
  const [start, setStart] = useState(true);
  const [main, setMain] = useState(false);
  const [finish, setFinish] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [numberOfQuestions, setNumberOfQuestions] = useState(10);

  // Standart function for a random number
  function getRandom(a) {
    const randomNumber = Math.floor(Math.random() * a);
    return randomNumber;
  }

  function mainAction() {
    setCurrentQuestion(currentQuestion + 1);

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
    const answers = fakeAnswersArray.map(
      (item) => Data.slice(item, item + 1)[0]
    );
    answers.map((item) => (item.isCorrect = false));
    answers.push(questionItem);

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
    if (currentQuestion === numberOfQuestions) {
      setMain(false);
      setFinish(true);
      return;
    }

    if (isCorrect) {
      setScore(score + 1);
      setRightAnswer(rightAnswer + 1);
    } else {
      setWrongAnswer(wrongAnswer + 1);
    }

    mainAction();
  }

  function startQuiz() {
    setStart(false);
    setMain(true);
    mainAction();
  }

  function startAgain() {
    setFlip(false);
    setCurrentQuestion(0);
    setRightAnswer(0);
    setWrongAnswer(0);
    setScore(0);
    setNumberOfQuestions(10);
    setFinish(false);
    setStart(true);
    setMain(false);
  }

  return (
    <div className="App">
      {start && (
        <>
          <Typography variant="h1">
            New Quiz App
            <br />
          </Typography>
          <br />

          <FormControl sx={{ margin: 0, textAlign: "center" }}>
            <FormLabel id="demo-row-radio-buttons-group-label">
              Number of questions
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
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
            <FormControlLabel
              control={<Checkbox />}
              label="Flip the question"
              onChange={() => {
                setFlip((prevState) => !prevState);
              }}
            />

            <Button variant="outlined" size="large" onClick={startQuiz}>
              Start the Quiz!
            </Button>
          </FormControl>
        </>
      )}

      {main && (
        <>
          <Typography variant="h4" sx={{ marginBottom: "0.55em" }}>
            Question {currentQuestion} out of {numberOfQuestions}
          </Typography>

          {!flip && (
            <div>
              <Typography variant="h2" sx={{ margin: 0 }}>
                {question.question}
              </Typography>

              <Typography
                variant="h1"
                color="primary"
                sx={{ marginBottom: "0.3em" }}
              >
                <div>{question.item}?</div>
              </Typography>
            </div>
          )}

          {flip && (
            <div>
              <Typography variant="h1" color="primary" sx={{ margin: 0 }}>
                {question.item}
              </Typography>

              <Typography variant="h2" sx={{ marginBottom: "0.6em" }}>
                {question.question}
              </Typography>
            </div>
          )}

          <Answers
            question={question}
            flip={flip}
            answerClicked={answerClicked}
          />
          <br />
          <Typography variant="h4">
            Right Answers: {rightAnswer} Wrong Answers: {wrongAnswer} Score:{" "}
            {score}
          </Typography>
          <Button
            variant="outlined"
            size="large"
            sx={{ marginTop: "2em" }}
            onClick={startAgain}
          >
            Back to Start
          </Button>
        </>
      )}

      {finish && (
        <>
          <Typography variant="h1">Finish!</Typography>
          <Typography variant="h4">
            {rightAnswer} out of {numberOfQuestions} questions correct.
          </Typography>
          <Button
            variant="outlined"
            size="large"
            sx={{ marginTop: "2em" }}
            onClick={startAgain}
          >
            Start Again
          </Button>
        </>
      )}
    </div>
  );
}

export default App;
