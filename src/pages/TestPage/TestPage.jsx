import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

import Button from "../../shared/components/Button";
import ButtonArrowOnly from "../../shared/components/ButtonArrowOnly";
import QuestForm from "../../shared/components/QuestForm";

import { getTests } from "../../redux/qa-tests/qa-test-operations";

import s from "./TestPage.module.css";

import allTestArray from "../../shared/components/RadioButtonsList/answers"; //only for test

let isFinished = false;
let text;
let path;
const answersList=[];

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
  // testPageName = "[Testing theory_]"
  const dispatch = useDispatch();

  const [testPageName, setTestPageName] = useState("[Testing theory_]");
  const [testQuestions, setTestQuestions] = useState(allTestArray);
  const [currentQuest, setCurrentQuest] = useState(0);
  

  useEffect(() => {
    path = localStorage.getItem("path");
    setTestPageName(testType[path]);
    dispatch(getTests(path));
  }, []);

  const questionText = testQuestions[currentQuest].question;

  const answersVariants = testQuestions[currentQuest].answers;

  const questCount = testQuestions.length;

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

  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <h2 className={s.title}>{testPageName}</h2>
        <NavLink to={path} className={s.btn}>
          {text}
        </NavLink>
      </div>
      <QuestForm
        questCount={currentQuest + 1}
        maxCount={questCount}
        questionText={questionText}
        answersList={answersVariants}
        answer = {answersList[currentQuest]}
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
