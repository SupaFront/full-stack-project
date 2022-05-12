import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form } from 'formik';

import { authValidationSchema } from '../../utils/authValidationSchema';
import { registerUser, logInUser } from '../../redux/auth/auth-operations';
import { getError, getUserId } from "../../redux/auth/auth-selectors";

import FormikInput from '../../shared/components/FormikInput';

import styles from './AuthForm.module.css';

const initialValues = {
	email: '',
	password: '',
};

function AuthForm() {
	const dispatch = useDispatch();
	const error = useSelector(getError);
	const userId = useSelector(getUserId);
	const [ isRegistered, setIsRegistered ] = useState(false);

	const onHandleClick = (string, props) => {
		if (!props.values.email || !props.values.password) {
			return props.setTouched({ ...props.touched, [ "email" ]: true, [ "password" ]: true });
		};

		if (!props.isValid) {
			return;
		}

		switch (string) {
			case 'signIn':
				dispatch(logInUser(props.values));
				setIsRegistered(false);
				break;

			case 'signUp':
				dispatch(registerUser(props.values));
				userId && setIsRegistered(true);
				break;

			default:
				return;
		}
		props.resetForm(initialValues);
	};

	return (
		<Formik
			initialValues={ initialValues }
			validationSchema={ authValidationSchema }
			onSubmit={ () => { } }
		>
			{ formikProps => (
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

					{ error && (
						<p className={ styles.sorryText }>{ error.message }</p>
					) }

					{ isRegistered && (
						<p className={ styles.sorryText }>Please, sign in to visit the site</p>
					) }

					<div className={ styles.buttonContainer }>
						<button
							type="button"
							className={ styles.signin }
							onClick={ () => onHandleClick('signIn', formikProps) }
						>
							Sign in
						</button>
						<button
							type="button"
							onClick={ () => onHandleClick('signUp', formikProps) }
							className={ styles.signup }
						>
							Sign up
						</button>
					</div>
				</Form>
			) }
		</Formik>
	);
}

export default AuthForm;
