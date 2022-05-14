import RadioButtonsList from "../RadioButtonsList/RadioButtonsList";

import s from "./QuestForm.module.css";

const QuestForm = ({
  questCount,
  maxCount,
  questionText,
  answersList,
  answer,
  onClick,
}) => {
  return (
    <div>
      <form className={s.form} action="#">
        <h2 className={s.title}>
          Question <span>{questCount}</span> / {maxCount}
        </h2>
        <RadioButtonsList
          questCount={questCount}
          questionText={questionText}
          answersList={answersList}
          answer={answer}
          onClick={onClick}
        />
      </form>
    </div>
  );
};

export default QuestForm;
