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

const testType = {
  tech: "[QA technical training_]",
  theory: "[Testing theory_]",
};

const TestPage = () => {
  // testPageName = "[Testing theory_]"
  const dispatch = useDispatch();

  const [testPageName, setTestPageName] = useState("[Testing theory_]");
  const [testQuestions, setTestQuestions] = useState(allTestArray);
  const [currentQuest, setcurrentQuest] = useState(0);

  useEffect(() => {
    path = localStorage.getItem("path");
    setTestPageName(testType[path]);
    dispatch(getTests(path));
  }, []);

  const questionText = testQuestions[currentQuest].question;

  const answersList = testQuestions[currentQuest].answers;

  const questCount = testQuestions.length;

  text = isFinished ? "Finish test" : "Cancel test";

  path = isFinished ? "/results" : "/";

  const btnImgLeftStyle = currentQuest ? "btnImgLeft" : "btnImgLeftDisabled";
  const btnImgRightStyle =
    currentQuest === questCount ? "btnImgRightDisabled" : "btnImgRight";

  const btnArrowLeftStyle = currentQuest
    ? "btnArrowLeft"
    : "btnArrowLeftDisabled";
  const btnArrowRightStyle =
    currentQuest === questCount ? "btnArrowRightDisabled" : "btnArrowRight";

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
        answersList={answersList}
      />
      <div className={s.wrapperBtn}>
        <Button
          text="Previous question"
          img={true}
          imgName={"arrow-left"}
          width={24}
          height={16}
          styles={btnImgLeftStyle}
        />
        <Button
          text="Next question"
          img={true}
          imgName={"arrow-right"}
          width={24}
          height={16}
          styles={"btnImgRight"}
        />
        <ButtonArrowOnly
          imgName={"arrow-left"}
          width={24}
          height={16}
          styles={btnArrowLeftStyle}
        />
        <ButtonArrowOnly
          imgName={"arrow-right"}
          width={24}
          height={16}
          styles={btnArrowRightStyle}
        />
      </div>
    </div>
  );
};

export default TestPage;
