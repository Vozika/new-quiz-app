import { useState, useEffect } from "react";
import "./App.css";
import initialData from "./test_data";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Answers from "./components/answers/Answers";

const splicedItemsFromData = [];
const Data = initialData.map((item) => ({ ...item }));
const AnswerData = initialData.map((item) => ({ ...item }));

function App() {

  const [splicedItemsFromData, setSplicedItemsFromData] = useState([]);
  const [question, setQuestion] = useState({
    question: "What is the capital of",
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
    // if (Data.length < numberOfAnswers) {
 
    // }

    setCurrentQuestion(currentQuestion + 1);
    const randomNumber = getRandom(Data.length);
    const randomItemFromData = Data.splice(randomNumber, 1)[0];
    const randomItemFromAnswerData = AnswerData.splice(AnswerData.indexOf(randomItemFromData), 1)[0];
    console.log(Data);
    console.log(Data.length);
    console.log(AnswerData);
    console.log(AnswerData.length);
    splicedItemsFromData.push(randomItemFromData);

    const answers = [];
    
    const randomItemFromDataForAnswers = {...randomItemFromData};
    answers.push(randomItemFromDataForAnswers);
    answers[0].isCorrect = true;

    const set = new Set();

    while (set.size < numberOfAnswers - 1) {
      const random = getRandom(AnswerData.length);
      set.add(random);
    }

    const fakeAnswersNumbers = Array.from(set);
    fakeAnswersNumbers.forEach(pushFakeAnswers);

    function pushFakeAnswers(item) {
      const randomFakeAnswerFromData = AnswerData.slice(item, item + 1);
      const fakeAnswer = randomFakeAnswerFromData.map((item) => ({ ...item }));

      fakeAnswer[0].isCorrect = false;
      answers.push(...fakeAnswer);
    }

    answers.sort(function () {
      return 0.5 - Math.random();
    });

    // Adding everything to a state object
    setQuestion((prevQuestion) => ({
      ...prevQuestion,
      item: randomItemFromData.country,
      answers: answers,
    }));
    console.log(randomItemFromAnswerData);
    AnswerData.splice(randomNumber, 0, randomItemFromAnswerData);
    console.log(AnswerData);
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

          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">
              Number of questions
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                value={initialData.length}
                control={<Radio />}
                label={initialData.length}
                onChange={() => {
                  setNumberOfQuestions(initialData.length);
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
          </FormControl>

          <Button variant="outlined" size="large" onClick={startQuiz}>
            Start the Quiz!
          </Button>
        </>
      )}

      {main && (
        <>
          <Typography variant="h4" sx={{ marginBottom: "0.55em" }}>
            Question {currentQuestion} out of {numberOfQuestions}
          </Typography>
          <Typography variant="h2" sx={{ margin: 0 }}>
            {question.question}
          </Typography>
          <Typography
            variant="h1"
            color="primary"
            sx={{ marginBottom: "0.3em" }}
          >
            {question.item}?
          </Typography>
          <Answers question={question} answerClicked={answerClicked} />
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
