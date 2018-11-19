import * as React from "react";
import { Formik, FormikProps, Form, Field, FieldProps } from "formik";
import {
	Button,
	FormGroup,
	InputGroup,
	ButtonGroup
} from "@blueprintjs/core";
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

function validate(getValidationSchema: Function) {
	return (values: SignupFormValues) => {
	  const validationSchema = getValidationSchema(values)
	  try {
		validationSchema.validateSync(values, { abortEarly: false })
		return {}
	  } catch (error) {
		return getErrorsFromValidationError(error)
	  }
	}
  }

function getErrorsFromValidationError(validationError: any) {
	const FIRST_ERROR = 0
	return validationError.inner.reduce((errors: any, error: any) => {
		return {
		...errors,
		[error.path]: error.errors[FIRST_ERROR],
		}
	}, {})
}

function getYupValidationSchema(values: SignupFormValues) {
	return Yup.object().shape({
		email: Yup.string()
			.email('Invalid email')
			.required('Required'),
		password: Yup.string()
			.required('Required')
			.min(8, 'password must be at least 8 letters'),
		passwordConfirm: Yup.string()
			.oneOf([values.password], 'Passwords are not the same!')
			.required('Required'),
	})
  }

export interface SignupFormValues {
	email: string;
	password: string;
	passwordConfirm: string;
}

interface SignupProps {
	onSubmit: Function;
}

export const Signup: React.SFC<SignupProps> = ({onSubmit}) => {
	return (
		<div>
			<h1>Sign up</h1>
			<Formik
				initialValues={{ email: "", password: "", passwordConfirm: ""}}
				validate={validate(getYupValidationSchema)}
				onSubmit={(values: SignupFormValues) => onSubmit(values)}
				render={(formikBag: FormikProps<SignupFormValues>) => (
					<Form>
						<Field
							name="email"
							render={({ field, form }: FieldProps<SignupFormValues>) => (
								<FormGroup
									label="email"
									labelFor="user-email"
									labelInfo="(required)"
								>
									<InputGroup id="user-email" {...field} type="string" />
									{form.touched.email && form.errors.email && form.errors.email}
								</FormGroup>
							)}
						/>
						<Field
							name="password"
							render={({ field, form }: FieldProps<SignupFormValues>) => (
								<FormGroup
									label="password"
									labelFor="user-password"
									labelInfo="(required)"
								>
									<InputGroup id="user-password" {...field} type="password"/>
									{form.touched.password && form.errors.email && form.errors.password}
								</FormGroup>
							)}
						/>
						<Field
							name="passwordConfirm"
							render={({ field, form }: FieldProps<SignupFormValues>) => (
								<FormGroup
									label="password confirm"
									labelFor="user-password-confirm"
									labelInfo="(required)"
								>
									<InputGroup id="user-password-confirm" {...field} type="password"/>
									{form.touched.passwordConfirm && form.errors.passwordConfirm && form.errors.passwordConfirm}
								</FormGroup>
							)}
						/>
						<ButtonGroup>
							<Button type="submit">Submit</Button>
							<Link className="bp3-button" to="/login">Log in</Link>
						</ButtonGroup>
					</Form>
				)}
			/>
		</div>
	);
};

export default Signup;
