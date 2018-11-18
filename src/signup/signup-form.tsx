import * as React from "react";
import { Formik, FormikProps, Form, Field, FieldProps } from "formik";
import {
	Button,
	FormGroup,
	InputGroup,
	ButtonGroup
} from "@blueprintjs/core";
import { Link } from 'react-router-dom';

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
