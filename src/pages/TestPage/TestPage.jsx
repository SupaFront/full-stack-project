import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import Button from "../../shared/components/Button";
import ButtonArrowOnly from "../../shared/components/ButtonArrowOnly";
import QuestForm from "../../shared/components/QuestForm";

import API from "../../API/qa-test";

import s from "./TestPage.module.css";

import { getQuestionType } from "../../redux/qa-tests/qa-test-selectors";

let isFinished = false;
let text;
let path;

const answersList = [];

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

const TestPage = () => {
  const [testPageName, setTestPageName] = useState("[Testing theory_]");
  const [testQuestions, setTestQuestions] = useState([]);
  const [currentQuest, setCurrentQuest] = useState(0);

  const questionType = useSelector(getQuestionType);

  useEffect(() => {
    path = localStorage.getItem("path");

    setTestPageName(testType[path]);

    const receiveQuests = async () => {
      try {
        const data = await API.getQuestions(questionType);

        const modifiedData = data.map((item) => ({ ...item, answer: "" }));

        setTestQuestions(modifiedData);
      } catch (err) {
        throw err;
      }
    };

    receiveQuests();
  }, []);

  const questCount = testQuestions?.length;

  text = isFinished ? "Finish test" : "Cancel test";

  path = isFinished ? "/results" : "/";

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

  const isAnswered = answersList.findIndex((item) => {
    return item?._id === testQuestions[currentQuest]._id;
  });

  console.log("isAnswered", isAnswered);

  if (currentQuest + 1 === questCount) {
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

  const handleChange = (answer) => {
    testQuestions[currentQuest].answer = answer;
    setTestQuestions([...testQuestions]);
<<<<<<< Updated upstream

    const resultTest = testQuestions.map(({ _id, answer }) => ({ id: _id, answer }));
=======
    resultTest = testQuestions.map(({ _id, answer }) => ({ id: _id, answer }));
>>>>>>> Stashed changes
    localStorage.setItem("resultTest", JSON.stringify(resultTest));
  };

  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <h2 className={s.title}>{testPageName}</h2>
        <NavLink to={path} className={s.btn}>
          {text}
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
          onClick={() => setCurrentQuest(currentQuest - 1)}
        />
        <Button
          text="Next question"
          img={true}
          imgName={"arrow-right"}
          width={24}
          height={16}
          styles={btnImgRightStyle}
          disabled={btnImgRightDisabledFlag}
          onClick={() => setCurrentQuest(currentQuest + 1)}
        />
        <ButtonArrowOnly
          imgName={"arrow-left"}
          width={24}
          height={16}
          styles={btnArrowLeftStyle}
          disabled={btnArrowLeftDisabledFlag}
          onClick={() => setCurrentQuest(currentQuest - 1)}
        />
        <ButtonArrowOnly
          imgName={"arrow-right"}
          width={24}
          height={16}
          styles={btnArrowRightStyle}
          disabled={btnArrowRightDisabledFlag}
          onClick={() => setCurrentQuest(currentQuest + 1)}
        />
      </div>
    </div>
  );
};

export default TestPage;
