import { Link } from "react-router-dom";

import logo from "../../../images/logo.png";

import styles from "./Logo.module.css";

function Logo() {
	return (
		<Link to="/">
			<img src={ logo } alt="Logo" width="129" height="28" />
		</Link>
	);
}

export default Logo;
