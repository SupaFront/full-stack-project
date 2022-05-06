import { useSelector } from "react-redux";
import { getUserEmail } from "../../../redux/auth/auth-selectors";

import styles from "./UserInfo.module.css";

function UserInfo() {
	const userEmail = useSelector(getUserEmail);

	const avatar = userEmail.slice(0, 1);
	const [ userName ] = userEmail.split("@");

	return (
		<>
			<div className={ styles.avatar }>{ avatar }</div>
			<span className={ styles.username }>{ userName }</span>
		</>
	);
}

export default UserInfo;
