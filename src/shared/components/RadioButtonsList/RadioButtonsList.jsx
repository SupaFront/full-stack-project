import { v4 as uuidv4 } from "uuid";

import s from "./RadioButtonsList.module.css";

import allTestArray from "./answers";

const questCount=7;

const Radiobuttons = ({
  questionText = allTestArray[questCount].question,
  answersList = allTestArray[questCount].answers,
}) => {
  const elements = answersList.map((item, index) => {
    return (
      // <div key={uuidv4()} className={s.radioButtonItem}>
      <div key={allTestArray[questCount]._id} className={s.radioButtonItem}>
        <input
          className={s.radioItem}
          type="radio"
          id={index}
          name="ritem"
          value={item}
        />
        <label for={index}>{item}</label>
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

export default Radiobuttons;
