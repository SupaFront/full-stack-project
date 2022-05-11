import { useField } from 'formik';
import styles from "./FormikInput.module.css";

const FormikInput = ({ label, pattern = null, inputClassName, errorClassName, ...props }) => {
	const [ field, meta ] = useField(props);

	return (
		<div className={ styles.container }>
			{ label && (
				<label htmlFor={ props.id || props.name } >
					{ label }
				</label>
			) }

			<input className={ inputClassName } { ...field } { ...props } pattern={ pattern } />
			{ meta.touched && meta.error ? <div className={ errorClassName }>{ meta.error }</div> : null }
		</div >
	);
};
export default FormikInput;

// Вызывать компонент в формате: <FormikInput label="Name" name="Name" type="text" placeholder="placeholderText" />
