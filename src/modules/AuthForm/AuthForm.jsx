import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Formik, Form, FormikProps } from "formik";

import { authValidationSchema } from "../../utils/authValidationSchema";
import { registerUser, logInUser } from "../../redux/auth/auth-operations";

import FormikInput from "../../shared/components/FormikInput";

import styles from "./AuthForm.module.css";

const initialValues = {
	email: "",
	password: "",
};

function AuthForm() {
	const dispatch = useDispatch();

	const [ isSignUp, setIsSignUp ] = useState(false);

	useEffect(() => {

	}, [ isSignUp ]);

	const onHandleClick = (string, props) => {
		console.log(props);

		// if (!props.isValidating) {
		// 	return;
		// };

		// switch (string) {
		// 	case "signIn":
		// 		dispatch(logInUser(props.values));
		// 		break;

		// 	case "signUp":
		// 		dispatch(registerUser(props.values));
		// 		break;

		// 	default:
		// 		return;
		// }
		// props.resetForm(initialValues);
	};



	return (
		<Formik
			initialValues={ initialValues }
			validationSchema={ authValidationSchema }
			onSubmit={ (values, { resetForm }) => {
				// if (isSignUp) {
				// 	dispatch(registerUser(values));
				// } else {
				// 	dispatch(logInUser(values));
				// };
				// resetForm(initialValues);
			} }
		>
			{ (formikProps) => (
				<Form className={ styles.form }>
					<FormikInput
						name="email"
						type="text"
						placeholder="E-mail"
						inputClassName={ styles.field }
						errorClassName={ styles.error }
					/>
					<FormikInput
						name="password"
						type="password"
						placeholder="Password"
						inputClassName={ styles.field }
						errorClassName={ styles.error }
					/>
					<div className={ styles.buttonContainer }>
						<button
							type="button"
							className={ styles.signin }
							onClick={ () => onHandleClick("signIn", formikProps) }>
							Sign in
						</button>
						<button
							type="button"
							onClick={ () => onHandleClick("signUp", formikProps) }
							className={ styles.signup }>
							Sign up
						</button>
					</div>
				</Form>
			) }
		</Formik >
	);
}

export default AuthForm;
