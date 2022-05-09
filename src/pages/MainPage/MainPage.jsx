import { Link } from "react-router-dom";
import GetSvg from "../../shared/components/GetSvg";

import s from "./MainPage.module.css";

const MainPage = () => {
  return (
    <div className={s.container}>
      <figure className={s.quoteWrapper}>
        <blockquote className={s.quote}>
          “Regression testing. What is it? If the system compiles, that's good,
          if it boots, that's great!”
        </blockquote>
        <figcaption className={s.authorQuote}>
          Linus Torvalds{" "}
          <span className={s.authorActivityType}>
            Linux kernel creator, hacker, 1969
          </span>
        </figcaption>
      </figure>
      <div className={s.linkWrapper}>
        <Link className={s.blackLink} to="/test">
          QA technical training
          <GetSvg
            name="arrow-right"
            width="24"
            height="16"
            className={"link"}
          />
        </Link>
        <Link className={s.orangeLink} to="/test">
          Testing theory
          <GetSvg
            name="arrow-right"
            width="24"
            height="16"
            className={"link"}
          />
        </Link>
      </div>
    </div>
  );
};

export default MainPage;
