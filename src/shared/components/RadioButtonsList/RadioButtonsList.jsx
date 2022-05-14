import { v4 as uuidv4 } from "uuid";

import s from "./RadioButtonsList.module.css";

const RadioButtonsList = ({
  currentQuest = 0,
  testQuestions,
  onChange,
}) => {
  const answerList = testQuestions[currentQuest]?.answers;
  const answer = testQuestions[currentQuest]?.answer;
  const questionText = testQuestions[currentQuest]?.question;

  const elements = answerList?.map((item, index) => {

    return (
      <div key={uuidv4()} className={s.radioButtonItem}>
        <input
          className={s.radioItem}
          type="radio"
          id={index}
          name="ritem"
          value={item}
          checked={item === answer}
          onChange={() => onChange(item)}
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
