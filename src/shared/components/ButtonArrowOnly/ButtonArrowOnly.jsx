import GetSvg from "../GetSvg";
import s from "./ButtonArrowOnly.module.css";
const ButtonArrowOnly = ({
  imgName,
  width,
  height,
  styles,
  disabled = false,
  onClick,
}) => {
  return (
    <button
      className={s[styles]}
      type="button"
      disabled={disabled}
      onClick={onClick}
    >
      <GetSvg name={imgName} width={width} height={height} className={"svg"} />
    </button>
  );
};

export default ButtonArrowOnly;
