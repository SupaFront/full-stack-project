import * as Yup from "yup";

const errorMessage = {
	email: "* Invalid email address.",
	emailLength: "* Email must contain from 10 to 63 characters",
	password:
		"* Password must contain at least 8 characters and contain letters and numbers.",
	required: "* The field is required.",
};

const emailRegexp = /^[^-]+([a-z0-9._-]{1,})+@[a-z0-9.-]+\.[a-z]{2,4}$/;
const passwordRegexp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

export const authValidationSchema = Yup.object().shape({
	email: Yup.string()
		.trim()
		.email(errorMessage.email)
		.min(10, errorMessage.emailLength)
		.max(63, errorMessage.emailLength)
		.matches(emailRegexp, errorMessage.email)
		.required(errorMessage.required),
	password: Yup.string()
		.trim()
		.min(8, errorMessage.password)
		.matches(passwordRegexp, errorMessage.password)
		.required(errorMessage.required),
});
