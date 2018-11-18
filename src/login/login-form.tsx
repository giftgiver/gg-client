import * as React from "react";
import { Formik, FormikProps, Form, Field, FieldProps } from "formik";
import {
	Button,
	FormGroup,
	InputGroup,
	ButtonGroup
} from "@blueprintjs/core";
import { Link } from 'react-router-dom';

export interface LoginFormValues {
	email: string;
	password: string;
}

interface LoginFormProps {
	onSubmit: Function;
}

export const LoginForm: React.SFC<LoginFormProps> = ({onSubmit}) => {
	return (
		<div>
			<h1>Login</h1>
			<Formik
				initialValues={{ email: "", password: ""}}
				onSubmit={(values: LoginFormValues) => onSubmit(values)}
				render={(formikBag: FormikProps<LoginFormValues>) => (
					<Form>
						<Field
							name="email"
							render={({ field, form }: FieldProps<LoginFormValues>) => (
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
							render={({ field, form }: FieldProps<LoginFormValues>) => (
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
						<ButtonGroup>
							<Button type="submit">Submit</Button>
							<Link className="bp3-button" to="/forgot-password">Forgot password</Link>
							<Link className="bp3-button" to="/signup">Sign Up</Link>
						</ButtonGroup>
					</Form>
				)}
			/>
		</div>
	);
};

export default LoginForm;
