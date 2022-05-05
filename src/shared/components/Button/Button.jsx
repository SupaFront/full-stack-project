import s from "./button.module.css";
const Button = (text,type="button",) => {
  return <div>
      <input class={s} type={type} text={text}/>
  </div>
};

export default Button;
