import RadioButtonsList from "../RadioButtonsList/RadioButtonsList";

import s from "./QuestForm.module.css";

const QuestForm = ({
  currentQuest,
  maxCount,
  testQuestions,
  onChange,
}) => {
  maxCount = testQuestions?.length;
  return (
    <div>
      <form className={s.form} action="#">
        <h2 className={s.title}>
          Question <span>{currentQuest + 1}</span> / {maxCount}
        </h2>
        <RadioButtonsList
          currentQuest={currentQuest}
          testQuestions={testQuestions}
          onChange={onChange}
        />
      </form>
    </div>
  );

};

export default QuestForm;
