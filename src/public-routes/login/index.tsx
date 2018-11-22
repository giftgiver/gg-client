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
		handleSubmit = ({email, password}: LoginFormValues): void => {
			const query = `query login($login: Login!) {
				login(login: $login) {
					id
				  	email
				}
			}`;

			// headers here is required. Without it, you'll get a weird error
			fetch('http://localhost:1337/graphql', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Accept': 'application/json',
				},
				body: JSON.stringify({
					query,
					operationName: 'login',
					variables: { login: { email, password }},
				})
			})
			.then(r => r.json())
			.then(res => {
				console.log(res);
				this.props.history.push('/givers');
			})
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
