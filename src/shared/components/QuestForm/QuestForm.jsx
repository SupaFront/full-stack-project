import Radiobuttons from "../RadioButtonsList/RadioButtonsList";

import s from "./questForm.module.css";

const QuestForm = ({ questCount, maxCount, questionText, answersList }) => {
  return (
    <div>
      <form className={s.form} action="#">
        <h2 className={s.title}>
          Question <span>{questCount}</span> / {maxCount}
        </h2>
        <Radiobuttons
          questCount={questCount}
          questionText={questionText}
          answersList={answersList}
        />
      </form>
    </div>
  );
};

export default QuestForm;
