import * as React from "react";
import {
	Card,
	Elevation,
} from "@blueprintjs/core";
import { withRouter, RouteComponentProps } from "react-router";
import { request } from 'graphql-request';

import styles from "./styles.module.css";
import LoginForm, { LoginFormValues } from './login-form';

const LoginRoute = withRouter<any>(
	class LoginComponent extends React.Component<RouteComponentProps<{}>, any> {
		handleSubmit = ({ email, password }: LoginFormValues): void => {

			const query = `query login($login:Login!) {
				login(login: $login) {
				  id
				  email
				}
			  }`;

			const variables = {
				login: { email, password }
			}

			interface LoginResponse {
				login: {id: string, email: string}
			}

			request<LoginResponse>('http://localhost:1337/graphql', query, variables)
				.then((data: LoginResponse) => {
					if (data.login.id) {
						this.props.history.push('givers');
					}
			});

		}
		render() {
			return (
				<div className={styles.login}>
					<Card interactive={true} elevation={Elevation.TWO}>
						<LoginForm onSubmit={this.handleSubmit} />
					</Card>
				</div>
			);
		}
	}
  )

class Login extends React.Component<any, any> {
	render() {
		return <LoginRoute />
	}
}

export default Login;
