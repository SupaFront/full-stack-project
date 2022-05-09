import GetSvg from "../GetSvg";
import s from "./button.module.css";
const Button = ({
  text = "Button text",
  img = false,
  imgName,
  width,
  height,
  styles,
}) => {
  return img ? (
    <button className={s[styles]} type="button">
      <GetSvg name={imgName} width={width} height={height} className={"svg"}/>
      {text}
    </button>
  ) : (
    <input className={s.btn} type="button" value={text} />
  );
};

export default Button;
