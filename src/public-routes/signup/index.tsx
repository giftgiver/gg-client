import * as React from "react";
import {
	Card,
	Elevation,
} from "@blueprintjs/core";
import { withRouter, RouteComponentProps } from "react-router";

import styles from "./styles.module.css";
import SignupForm, { SignupFormValues } from './signup-form';
import { request } from 'graphql-request';

const SignupRoute = withRouter<any>(
	class SignupComponent extends React.Component<RouteComponentProps<{}>, any> {
		handleSubmit = ({email, password}: SignupFormValues): void => {
			const mutation = `
				mutation createUser($user: UserInput!) {
					createUser(user: $user) {
						token
					}
				}`;

			const variables = { user: { email, password } };

			request<{createUser: {token: string}}>('http://localhost:1337/graphql', mutation, variables)
				.then((data: {createUser: {token: string}}) => {
					this.props.history.push('givers');
				});
		}
		render() {
			return (
				<div className={styles.signup}>
					<Card interactive={true} elevation={Elevation.TWO}>
						<SignupForm onSubmit={this.handleSubmit} />
					</Card>
				</div>
			);
		}
	}
)

class SignUp extends React.Component<any, any> {
	render() {
		return <SignupRoute />
	}
}

export default SignUp;
