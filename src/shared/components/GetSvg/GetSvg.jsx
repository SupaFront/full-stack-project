import sprite from "../../../images/svg/sprite.svg";

const GetSvg = ({ name, width, height, className }) => {
	return (
		<svg width={ width } height={ height } className={ className }>
			<use href={ sprite + `#${name}` } />
		</svg>
	);
};

// Usage: <GetIcon name="svgName" width={svgWidth} height={svgHeight} classname={svgClassName}/>
export default GetSvg;
