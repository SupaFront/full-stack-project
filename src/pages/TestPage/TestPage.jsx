import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import Button from "../../shared/components/Button";
import ButtonArrowOnly from "../../shared/components/ButtonArrowOnly";
import QuestForm from "../../shared/components/QuestForm";

import API from "../../API/qa-test";

import s from "./TestPage.module.css";

import { getQuestionType } from "../../redux/qa-tests/qa-test-selectors";

// import useLocalStorage from "../../shared/hooks/useLocalStorage";


const testType = {
  tech: "[QA technical training_]",
  theory: "[Testing theory_]",
};

let btnImgLeftStyle;
let btnArrowLeftStyle;
let btnImgLeftDisabledFlag;
let btnArrowLeftDisabledFlag;

let btnArrowRightStyle;
let btnImgRightStyle;
let btnImgRightDisabledFlag;
let btnArrowRightDisabledFlag;

let btnFinishTestStyle;

const TestPage = () => {

  const [testPageName, setTestPageName] = useState("[Testing theory_]");
  const [testQuestions, setTestQuestions] = useState([]);
  const [currentQuest, setCurrentQuest] = useState(0);

  // const [resultTest, setResultTest] = useLocalStorage("resultTest", null);
  // const [currentQuestLS, setCurrentQuestLS] = useLocalStorage(
  //   "currentQuest",
  //   null
  // );
 

  const questionType = useSelector(getQuestionType);

  useEffect(() => {
    btnFinishTestStyle = s.btnFinishInvisible;

    const savedResults = JSON.parse(localStorage.getItem("resultTest"));
    // const savedResults = resultTest;


    questionType ? setTestPageName(testType[questionType]) : setTestPageName("tech");

    const savedCurrentQuest = JSON.parse(localStorage.getItem("currentQuest"));
    // const savedCurrentQuest = currentQuest;

    const receiveQuests = async () => {
      try {
        const data = await API.getQuestions(questionType);

        const modifiedData = data.map((item) => ({ ...item, answer: "" }));

        setTestQuestions(modifiedData); 

        localStorage.setItem("resultTest", JSON.stringify(modifiedData));
        // setResultTest(modifiedData);

        setCurrentQuest(0);
      } catch (err) {
        throw err;
      }
    };

    if (!savedResults) {
      receiveQuests();
    } else if (savedResults[0]?.questionType === questionType) {
      setCurrentQuest(savedCurrentQuest);
      setTestQuestions(savedResults);
    } else {
      receiveQuests();
    }
  }, []);

  const questCount = testQuestions?.length;

  if (!currentQuest) {
    btnImgLeftStyle = "btnImgLeftDisabled";
    btnArrowLeftStyle = "btnArrowLeftDisabled";
    btnImgLeftDisabledFlag = true;
    btnArrowLeftDisabledFlag = true;
  } else {
    btnImgLeftStyle = "btnImgLeft";
    btnArrowLeftStyle = "btnArrowLeft";
    btnImgLeftDisabledFlag = false;
    btnArrowLeftDisabledFlag = false;
  }

  if (!testQuestions[currentQuest]?.answer) {
    btnImgRightStyle = "btnImgRightDisabled";
    btnArrowRightStyle = "btnArrowRightDisabled";
    btnImgRightDisabledFlag = true;
    btnArrowRightDisabledFlag = true;
  } else {
    btnImgRightStyle = "btnImgRight";
    btnArrowRightStyle = "btnArrowRight";
    btnImgRightDisabledFlag = false;
    btnArrowRightDisabledFlag = false;
  }

  if (currentQuest + 1 === questCount) {
    btnImgRightStyle = "btnImgRightInvisible";
    btnArrowRightStyle = "btnArrowRightInvisible";
    btnFinishTestStyle = s.btnFinishDisabled;
  } else {
    btnFinishTestStyle = s.btnFinishInvisible;
  }

  if (currentQuest + 1 === questCount && testQuestions[currentQuest]?.answer) {
    btnFinishTestStyle = s.btnFinish;
  }

  const handleChange = (answer) => {
    testQuestions[currentQuest].answer = answer;
    setTestQuestions([...testQuestions]);

    localStorage.setItem("resultTest", JSON.stringify(testQuestions));
    // setResultTest(testQuestions);
  };

  const increment = () => {
    setCurrentQuest(currentQuest + 1);
  };

  const decrement = () => {
    setCurrentQuest(currentQuest - 1);
  };

  const localStorageClear = () => {
    // setCurrentQuestLS(null);
    // setResultTest(null);
    localStorage.removeItem("currentQuest");
    localStorage.removeItem("resultTest");
  };

  // setCurrentQuestLS(currentQuest);
  localStorage.setItem("currentQuest", currentQuest);

  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <h2 className={s.title}>{testPageName}</h2>
        <NavLink
          to={"/"}
          className={s.btn}
          onClick={() => {
            // localStorage.removeItem("resultTest");
            // localStorage.clear();
            localStorageClear();
          }}
        >
          {"Cancel test"}
        </NavLink>
      </div>
      <QuestForm
        currentQuest={currentQuest}
        testQuestions={testQuestions}
        onChange={handleChange}
      />
      <div className={s.wrapperBtn}>
        <Button
          text="Previous question"
          img={true}
          imgName={"arrow-left"}
          width={24}
          height={16}
          styles={btnImgLeftStyle}
          disabled={btnImgLeftDisabledFlag}
          onClick={() => {
            decrement();
          }}
        />
        <Button
          text="Next question"
          img={true}
          imgName={"arrow-right"}
          width={24}
          height={16}
          styles={btnImgRightStyle}
          disabled={btnImgRightDisabledFlag}
          onClick={() => {
            increment();
          }}
        />
        <ButtonArrowOnly
          imgName={"arrow-left"}
          width={24}
          height={16}
          styles={btnArrowLeftStyle}
          disabled={btnArrowLeftDisabledFlag}
          onClick={() => {
            decrement();
          }}
        />
        <ButtonArrowOnly
          imgName={"arrow-right"}
          width={24}
          height={16}
          styles={btnArrowRightStyle}
          disabled={btnArrowRightDisabledFlag}
          onClick={() => {
            increment();
          }}
        />
        <NavLink
          to={testQuestions[currentQuest]?.answer ? "/results" : "#"}
          className={btnFinishTestStyle}
        >
          {"Finish test"}
        </NavLink>
      </div>
    </div>
  );
};

export default TestPage;
