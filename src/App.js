import { useState, useMemo } from "react";
import "./App.css";
import { initialData } from "./region_data";
import initialDataRU from "./id_data_ru";

import { interfaceRU } from "./interface";
import { interfaceEN } from "./interface";

import { useSelector, useDispatch } from "react-redux";
import {
  setShow5050False,
  setLessAnswersFalse,
  setFlipFalse,
  setNumberOfQuestions,
  setIronManFalse,
  setHideLettersFalse,
  setStatisticsFalse,
  setOptionsFalse,
  setIronManModalFalse,
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
  let answers = [];
  let questionText = "";
  const localStorageData = [
    "ironManStreak",
    "ironManAttempts",
    "rightAnswers",
    "wrongAnswers",
    "option5050",
    "gamesFinished",
  ];

  localStorageData.map(
    (data) => !localStorage.getItem(data) && localStorage.setItem(data, 0)
  );

  const { flip, numberOfQuestions, numberOfAnswers, ironMan, RU, lessAnswers } =
    useSelector((store) => store.options);
  const { currentQuestion } = useSelector((store) => store.score);
  const { isClicked, start, main, finish } = useSelector(
    (store) => store.utils
  );

  if (!RU) {
    Data = initialData.map((item) => ({ ...item }));
    questionText = !flip
      ? interfaceEN.QUESTION_TEXT
      : interfaceEN.QUESTION_TEXT_FLIP;
  }

  if (RU) {
    Data = initialDataRU.map((item) => ({ ...item }));
    questionText = !flip
      ? interfaceRU.QUESTION_TEXT
      : interfaceRU.QUESTION_TEXT_FLIP;
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
        region: "",
      },
    ],
  });

  // Standart function for a random number
  function getRandom(a) {
    const randomNumber = Math.floor(Math.random() * a);
    return randomNumber;
  }

  function theEnd() {
    dispatch(setShowFadeTrue());
    dispatch(clearCurrentQuestion());
    dispatch(setMainFalse());
    dispatch(setFinishTrue());
  }

  function ironManToLocalStorage() {
    if (currentQuestion - 1 > localStorage.getItem("ironManStreak")) {
      localStorage.setItem("ironManStreak", currentQuestion - 1);
    }
  }

  function mainAction() {
    if (currentQuestion === numberOfQuestions && main) {
      localStorage.gamesFinished = Number(localStorage.gamesFinished) + 1;
      if (ironMan) {
        ironManToLocalStorage();
      }
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
      if (lessAnswers) {
        localStorage.option5050 = Number(localStorage.option5050) + 1;
      }
      if (isCorrect) {
        dispatch(setScore());
        dispatch(setRightAnswer());
        localStorage.rightAnswers = Number(localStorage.rightAnswers) + 1;
      } else {
        localStorage.wrongAnswers = Number(localStorage.wrongAnswers) + 1;
        if (ironMan) {
          ironManToLocalStorage();

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
    dispatch(setOptionsFalse());
    dispatch(setStatisticsFalse());
    dispatch(setIronManModalFalse());
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
    dispatch(setOptionsFalse());
    dispatch(setStatisticsFalse());
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
