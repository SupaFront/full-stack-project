import RadioButtonsList from "../RadioButtonsList/RadioButtonsList";

import s from "./QuestForm.module.css";

const QuestForm = ({
  questCount,
  maxCount,
  questionText,
  answersList,
  answer,
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
        />
      </form>
    </div>
  );
};

export default QuestForm;
