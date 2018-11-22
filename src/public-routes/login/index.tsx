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
			console.log(payload);
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
