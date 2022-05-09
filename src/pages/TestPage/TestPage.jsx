import Button from "../../shared/components/Button";
import QuestForm from "../../shared/components/QuestForm";

import s from "./TestPage.module.css";

import allTestArray from "../../shared/components/RadioButtonsList/answers"; //only for test
const questCount = 2; //only for test

const TestPage = ({ testPageName = "[Testing theory_]" }) => {
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <h2 className={s.title}>{testPageName}</h2>
        <Button text="Finish test" />
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
      </div>
    </div>
  );
};

export default TestPage;
