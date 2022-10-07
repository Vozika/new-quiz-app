import { useState } from "react";
import "./App.css";
import initialData from "./id_data";

import { useSelector, useDispatch } from "react-redux";
import {
  setShow5050False,
  setLessAnswersFalse,
  setFlipFalse,
  setNumberOfQuestions,
} from "./features/options/optionsSlice";
import { handleClose } from "./features/modal/modalSlice";
import {
  setRightAnswer,
  setWrongAnswer,
  clearRightAnswer,
  clearWrongAnswer,
} from "./features/score/scoreSlice";

import Answers from "./components/answers/Answers";
import Finish from "./components/finish/Finish";
import Start from "./components/start/Start";
import Counter from "./components/counter/Counter";
import Question from "./components/question/Question";
import Buttons from "./components/buttons/Buttons";

const Data = initialData.map((item) => ({ ...item }));

function App() {
  const dispatch = useDispatch();

  const { flip, numberOfQuestions } = useSelector((store) => store.options);

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

  const [numberOfAnswers, setNumberOfAnswers] = useState(4);
  const [score, setScore] = useState(0);

  const [start, setStart] = useState(true);
  const [main, setMain] = useState(false);
  const [finish, setFinish] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);

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

    setShowFade(true);
    setIsClicked(false);
    dispatch(setLessAnswersFalse());
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
        dispatch(setRightAnswer());
      } else {
        dispatch(setWrongAnswer());
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
    dispatch(setFlipFalse());
    dispatch(setShow5050False());
    dispatch(handleClose());
    setCurrentQuestion(0);
    dispatch(clearRightAnswer());
    dispatch(clearWrongAnswer());
    setScore(0);
    dispatch(setNumberOfQuestions(10));
    setFinish(false);
    setStart(true);
    setMain(false);
  }

  function playAgain() {
    dispatch(clearRightAnswer());
    dispatch(clearWrongAnswer());
    setScore(0);
    setFinish(false);
    setMain(true);
    mainAction();
  }

  return (
    <div className="App">
      <div className="container">
        {start && (
          <Start
            Data={Data}
            setSlicedItemsFromData={setSlicedItemsFromData}
            startQuiz={startQuiz}
          />
        )}

        {main && (
          <>
            <Question
              currentQuestion={currentQuestion}
              question={question}
              showFade={showFade}
            />

            <Answers
              question={question}
              answerClicked={answerClicked}
              isClicked={isClicked}
              numberOfAnswers={numberOfAnswers}
            />

            <br />

            <Counter />

            <Buttons startAgain={startAgain} />
          </>
        )}

        {finish && <Finish playAgain={playAgain} startAgain={startAgain} />}
      </div>
    </div>
  );
}

export default App;
