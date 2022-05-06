import QuestList from "../QuestList";
import GetSvg from "../GetSvg";
import Radiobuttons from "../RadioButtonsList/RadioButtonsList";

import s from "./questForm.module.css";

const QuestForm = ({
  questCurrent = 1,
  questCount = 12,
  questText = "What is regression testing?",
}) => {
  return (
    <div>
      <form className={s.form} action="#">
        <h2 className={s.title}>
          Question <span>{questCurrent}</span> / {questCount}
        </h2>
        {/* <p className={s.questText}>{questText}</p> */}
        <Radiobuttons />
      </form>
      
    </div>
  );
};

export default QuestForm;
