import * as React from "react";
import {
	Card,
	Elevation,
} from "@blueprintjs/core";
import { withRouter, RouteComponentProps } from "react-router";

import styles from "./styles.module.css";
import LoginForm, { LoginFormValues } from './login-form';

const LoginRoute = withRouter<any>(
	class LoginComponent extends React.Component<RouteComponentProps<{}>, any> {
		handleSubmit = (payload: LoginFormValues): void => {
			const bodys = `"query" {
				login(login: { email: "${payload.email}", password: "${payload.password}"}) {
				  id
				  email
				  firstName
				  lastName
				  phoneNumber
				}
			  }`;

			const body = `{“query”:“query login($login:Login!) {
				login(login: $login) {
					id
					email
					firstName
					lastName
					phoneNumber
				}
			}“,
			”variables”:{“login”:{“email”:“${payload.email}”,“password”:“${payload.password}“}},“operationName”:“login”}`;

			fetch('http://localhost:1337/graphql', {
				method: 'POST',
				body,
			}).then(res => {
				console.log(res);
			})
			this.props.history.push('/givers');
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
