import Button from "../../shared/components/Button";
import QuestForm from "../../shared/components/QuestForm";

import s from "./TestPage.module.css";

const TestPage = ({ testPageName = "[Testing theory_]" }) => {
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <h2 className={s.title}>{testPageName}</h2>
        <Button text="Finish test" />
      </div>
      <QuestForm/>
    </div>
  );
};

export default TestPage;
