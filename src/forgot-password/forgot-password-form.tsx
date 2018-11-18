import * as React from "react";
import { Formik, FormikProps, Form, Field, FieldProps } from "formik";
import {
	Button,
	FormGroup,
	InputGroup,
	ButtonGroup
} from "@blueprintjs/core";
import { Link } from 'react-router-dom';

export interface ForgotPasswordValues {
	email: string;
}

interface ForgotPasswordProps {
	onSubmit: Function;
}

export const ForgotPassword: React.SFC<ForgotPasswordProps> = ({onSubmit}) => {
	return (
		<div>
			<h1>Forgot password</h1>
			<Formik
				initialValues={{ email: ""}}
				onSubmit={(values: ForgotPasswordValues) => onSubmit(values)}
				render={(formikBag: FormikProps<ForgotPasswordValues>) => (
					<Form>
						<Field
							name="email"
							render={({ field, form }: FieldProps<ForgotPasswordValues>) => (
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
						<ButtonGroup>
							<Button type="submit">Submit</Button>
							<Link className="bp3-button" to="/login">Login</Link>
						</ButtonGroup>
					</Form>
				)}
			/>
		</div>
	);
};

export default ForgotPassword;
