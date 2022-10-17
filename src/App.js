import { useState, useMemo } from "react";
import "./App.css";
import initialData from "./id_data";
import initialDataRU from "./id_data_ru";

import { useSelector, useDispatch } from "react-redux";
import {
  setShow5050False,
  setLessAnswersFalse,
  setFlipFalse,
  setNumberOfQuestions,
  setIronManFalse,
  setHideLettersFalse,
} from "./features/options/optionsSlice";
import { handleClose } from "./features/modal/modalSlice";
import {
  setRightAnswer,
  setWrongAnswer,
  clearRightAnswer,
  clearWrongAnswer,
  setCurrentQuestion,
  clearCurrentQuestion,
  setScore,
  clearScore,
} from "./features/score/scoreSlice";

import {
  setShowFadeTrue,
  setShowFadeFalse,
  setIsClickedTrue,
  setIsClickedFalse,
  setStartTrue,
  setStartFalse,
  setMainTrue,
  setMainFalse,
  setFinishTrue,
  setFinishFalse,
} from "./features/utils/utilsSlice";

import Answers from "./components/answers/Answers";
import Finish from "./components/finish/Finish";
import Start from "./components/start/Start";
import Counter from "./components/counter/Counter";
import Question from "./components/question/Question";
import Buttons from "./components/buttons/Buttons";

function App() {
  const dispatch = useDispatch();
  let Data = [];
  let questionText = "";
  if (!localStorage.getItem("ironManStreak")) {
    localStorage.setItem("ironManStreak", 0);
  }

  console.log(localStorage);

  const { flip, numberOfQuestions, numberOfAnswers, ironMan, RU } = useSelector(
    (store) => store.options
  );
  const { currentQuestion } = useSelector((store) => store.score);
  const { isClicked, start, main, finish } = useSelector(
    (store) => store.utils
  );

  if (!RU) {
    Data = initialData.map((item) => ({ ...item }));
    questionText = !flip
      ? "What is the capital of"
      : "is the capital of which country?";
  }

  if (RU) {
    Data = initialDataRU.map((item) => ({ ...item }));
    questionText = !flip
      ? "Какая столица этой страны: "
      : "столица какой страны?";
  }

  let slicedItemsFromData = useMemo(() => {
    return [];
  }, []);

  const [question, setQuestion] = useState({
    question: questionText,
    item: "",
    answers: [
      {
        capital: "",
        id: "",
        country: "",
      },
    ],
  });

  // Standart function for a random number
  function getRandom(a) {
    const randomNumber = Math.floor(Math.random() * a);
    return randomNumber;
  }

  let answers = [];

  function theEnd() {
    dispatch(setShowFadeTrue());
    dispatch(clearCurrentQuestion());
    dispatch(setMainFalse());
    dispatch(setFinishTrue());
  }

  function mainAction() {
    if (currentQuestion === numberOfQuestions && main) {
      setTimeout(() => {
        theEnd();
      }, 450);

      return;
    }

    if (slicedItemsFromData.length === Data.length) {
      slicedItemsFromData.length = 0;
    }

    dispatch(setShowFadeTrue());
    dispatch(setIsClickedFalse());
    dispatch(setLessAnswersFalse());
    dispatch(setCurrentQuestion());

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
      question: questionText,
      item: questionItem[questionSubject],
      answers: answers,
    }));
  }

  function answerClicked(isCorrect) {
    if (!isClicked) {
      if (isCorrect) {
        dispatch(setScore());
        dispatch(setRightAnswer());
      } else {
        if (ironMan) {
          if (currentQuestion - 1 > localStorage.getItem("ironManStreak")) {
            localStorage.setItem("ironManStreak", currentQuestion - 1);
          }

          setTimeout(() => {
            theEnd();
          }, 900);

          // return;
        }
        dispatch(setWrongAnswer());
      }

      dispatch(setShowFadeFalse());
      setTimeout(() => {
        mainAction();
      }, 900);
    }

    dispatch(setIsClickedTrue());
  }

  function startQuiz() {
    dispatch(setShowFadeTrue());
    dispatch(setStartFalse());
    dispatch(setMainTrue());
    mainAction();
  }

  function startAgain() {
    dispatch(setIronManFalse());
    dispatch(setShowFadeTrue());
    dispatch(setFlipFalse());
    dispatch(setShow5050False());
    dispatch(setHideLettersFalse());
    dispatch(handleClose());
    dispatch(clearCurrentQuestion());
    dispatch(clearRightAnswer());
    dispatch(clearWrongAnswer());
    dispatch(clearScore());
    dispatch(setNumberOfQuestions(10));
    dispatch(setFinishFalse());
    dispatch(setStartTrue());
    dispatch(setMainFalse());
  }

  function playAgain() {
    if (ironMan) {
      slicedItemsFromData.length = 0;
    }
    dispatch(clearCurrentQuestion());
    dispatch(setShowFadeTrue());
    dispatch(clearRightAnswer());
    dispatch(clearWrongAnswer());
    dispatch(clearScore());
    dispatch(setFinishFalse());
    dispatch(setMainTrue());
    mainAction();
  }

  return (
    <div className="App">
      <div className="container">
        {start && (
          <Start
            Data={Data}
            slicedItemsFromData={slicedItemsFromData}
            startQuiz={startQuiz}
          />
        )}

        {main && (
          <>
            <Question question={question} />
            <Answers question={question} answerClicked={answerClicked} />
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
