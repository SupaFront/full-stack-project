import * as Yup from "yup";

const errorMessage = {
	email: "* Invalid email address.",
	password:
		"* Password must contain at least 6 characters.",
	required: "* The field is required.",
};

const emailRegexp = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

export const authValidationSchema = Yup.object().shape({
	email: Yup.string()
		.trim()
		.email(errorMessage.email)
		.matches(emailRegexp, errorMessage.email)
		.required(errorMessage.required),
	password: Yup.string()
		.trim()
		.min(6, errorMessage.password)
		.required(errorMessage.required),
});
