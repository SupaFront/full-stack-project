import s from "./TestPage.module.css";
import Button from "../../shared/components/Button";

const TestPage = (testPageName = "[_Testing theory_ ]") => {
  return (
    <div>
      <div class={s.wrapper}>
        <h2>{testPageName}</h2>
        <Button text="Finish test" />
      </div>
    </div>
  );
};

export default TestPage;
