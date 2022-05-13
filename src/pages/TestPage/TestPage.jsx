import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

import Button from "../../shared/components/Button";
import ButtonArrowOnly from "../../shared/components/ButtonArrowOnly";
import QuestForm from "../../shared/components/QuestForm";

import s from "./TestPage.module.css";

import allTestArray from "../../shared/components/RadioButtonsList/answers"; //only for test

const questCount = 0; //only for test

let isFinished = false;
let text;
let path;

const testType = "tech";

const TestPage = ({ testPageName = "[Testing theory_]" }) => {
  const dispatch = useDispatch();

  // useEffect(dispatch(getTests(testType)), []);

  text = isFinished ? "Finish test" : "Cancel test";

  path = isFinished ? "/results" : "/";

  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <h2 className={s.title}>{testPageName}</h2>
        <NavLink to={path} className={s.btn}>
          {text}
        </NavLink>
      </div>
      <QuestForm
        questCount={questCount + 1}
        maxCount={allTestArray.length}
        questionText={allTestArray[questCount].question}
        answersList={allTestArray[questCount].answers}
      />
      <div className={s.wrapperBtn}>
        <Button
          text="Previous question"
          img={true}
          imgName={"arrow-left"}
          width={24}
          height={16}
          styles={"btnImgLeft"}
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
          styles={"btnArrowLeft"}
        />
        <ButtonArrowOnly
          imgName={"arrow-right"}
          width={24}
          height={16}
          styles={"btnArrowRight"}
        />
      </div>
    </div>
  );
};

export default TestPage;
