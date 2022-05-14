import GetSvg from "../GetSvg";
import s from "./button.module.css";
const Button = ({
  text = "Button text",
  img = false,
  imgName,
  width,
  height,
  styles,
  disabled = false,
  onClick
}) => {
  return img ? (
    <button className={s[styles]} type="button" disabled={disabled} onClick={onClick}>
      <GetSvg name={imgName} width={width} height={height} className={"svg"} onClick={onClick}/>
      {text}
    </button>
  ) : (
    <input className={s.btn} type="button" value={text} disabled={disabled} onClick={onClick}/>
  );
};

export default Button;
