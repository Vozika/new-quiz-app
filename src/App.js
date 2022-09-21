import { useState, useEffect } from "react";
import "./App.css";
import initialData from "./test_data";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import Answers from "./components/answers/Answers";

// const splicedItemsFromData = [];
// const Data = [...initialData];

function App() {
  const [Data, setData] = useState([...initialData]);
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
    if (Data.length <= numberOfAnswers) {
      setData([...initialData]);
      setSplicedItemsFromData([]);
    }

    setCurrentQuestion(currentQuestion + 1);
    const randomItemFromData = Data.splice(getRandom(Data.length), 1)[0];
    splicedItemsFromData.push(randomItemFromData);
    randomItemFromData.isCorrect = true;
    const answers = [];
    answers.push(randomItemFromData);

    const set = new Set();

    while (set.size < numberOfAnswers - 1) {
      const random = getRandom(Data.length);
      set.add(random);
    }

    const fakeAnswersNumbers = Array.from(set);
    fakeAnswersNumbers.forEach(pushFakeAnswers);

    function pushFakeAnswers(item) {
      const randomFakeAnswerFromData = Data.slice(item, item + 1);
      randomFakeAnswerFromData[0].isCorrect = false;
      answers.push(...randomFakeAnswerFromData);
    }

    console.log(answers);

    answers.sort(function () {
      return 0.5 - Math.random();
    });

    // Adding everything to a state object
    setQuestion((prevQuestion) => ({
      ...prevQuestion,
      item: randomItemFromData.country,
      answers: answers,
    }));
  }

  // useEffect(() => {
  //   mainAction();
  // },[])

  function answerClicked(isCorrect) {
    if (currentQuestion === numberOfQuestions) {
      setMain(false);
      setFinish(true);
    }

    if (isCorrect) {
      setScore(score + 1);
      setRightAnswer(rightAnswer + 1);
    } else {
      setWrongAnswer(wrongAnswer + 1);
    }

    if (currentQuestion < numberOfQuestions) {
      mainAction();
    }
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
    setFinish(false);
    setStart(true);
    setMain(false);
  }

  console.log(Data);
  console.log(splicedItemsFromData);

  return (
    <div className="App">
      {start && (
        <>
          <Typography variant="h1">
            New Quiz App
            <br />
          </Typography>
          <br />
          <Button variant="outlined" size="large" onClick={startQuiz}>
            Start the Quiz!
          </Button>
        </>
      )}

      {main && (
        <>
          <Typography variant="h4" sx={{ marginBottom: "0.55em" }}>
            Question {currentQuestion}
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
