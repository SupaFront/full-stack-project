import { useState } from "react";
import AuthForm from "../../modules/AuthForm";
import GetSvg from "../../shared/components/GetSvg";

import styles from "./AuthPage.module.css";

function AuthPage() {
	const [ isGoogleButtonClicked, setIsGoogleButtonClicked ] = useState(false);

	const onClickGoogleButton = () => {
		setIsGoogleButtonClicked(true);
	};

	return (
		<section className={ styles.authSection }>
			<div>
				<h2 className={ styles.title }>Pro Test</h2>
				<p className={ styles.subtitle }>
					<b>[</b>
					&nbsp;We will help you find weak points
					in knowledge so that you can strengthen it. We will show you what is relevant to know for a <b>QA Engineer</b> and will try to make the learning process more diverse_&nbsp;
					<b>]</b>
				</p>
			</div>
			<div className={ styles.container }>
				<p>Login to our app using e-mail and password:</p>
				<AuthForm />
			</div>

		</section>
	);
}

export default AuthPage;
