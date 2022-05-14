import { v4 as uuidv4 } from "uuid";

import s from "./RadioButtonsList.module.css";

import allTestArray from "./answers";

const RadioButtonsList = ({
  questionText = allTestArray[questCount].question,
  answersList = allTestArray[questCount].answers,
  questCount = 0,
  answer,
}) => {
  const elements = answersList.map((item, index) => {
    return (
      // <div key={uuidv4()} className={s.radioButtonItem}>
      <div key={uuidv4()} className={s.radioButtonItem}>
        <input
          className={s.radioItem}
          type="radio"
          id={index}
          name="ritem"
          value={item}
          checked={item === answer}
        />
        <label htmlFor={index}>{item}</label>
      </div>
    );
  });

  return (
    <div className={s.wrapper}>
      <p className={s.title}>{questionText}</p>
      <div className={s.group}>{elements}</div>
    </div>
  );
};

export default RadioButtonsList;
