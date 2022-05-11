import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, FormikProps } from 'formik';

import { authValidationSchema } from '../../utils/authValidationSchema';
import { registerUser, logInUser } from '../../redux/auth/auth-operations';
import { getError } from "../../redux/auth/auth-selectors";

import FormikInput from '../../shared/components/FormikInput';

import styles from './AuthForm.module.css';

const initialValues = {
	email: '',
	password: '',
};

function AuthForm() {
	const dispatch = useDispatch();
	const error = useSelector(getError);

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
				break;

			case 'signUp':
				dispatch(registerUser(props.values));
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
			onSubmit={ (values, { resetForm }) => {
				// if (isSignUp) {
				// 	dispatch(registerUser(values));
				// } else {
				// 	dispatch(logInUser(values));
				// };
				// resetForm(initialValues);
			} }
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
