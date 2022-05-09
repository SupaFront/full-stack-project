import sprite from "../../../images/svg/sprite.svg";

import s from "./GetSvg.module.css";

const GetSvg = ({ name, width, height, className }) => {
	return (
		<svg width={ width } height={ height } className={ s[className] }>
			<use href={ sprite + `#${name}` } />
		</svg>
	);
};

// Usage: <GetIcon name="svgName" width={svgWidth} height={svgHeight} classname={svgClassName}/>
export default GetSvg;
