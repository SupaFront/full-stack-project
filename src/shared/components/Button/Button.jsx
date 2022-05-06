import s from "./button.module.css";
const Button = ({text="kuku"}) => {
  return (
      <input className={s.btn} type="button" value={text} />
  );
};

export default Button;
