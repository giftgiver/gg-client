import * as React from "react";
import {
	Card,
	Elevation,
} from "@blueprintjs/core";
import { withRouter, RouteComponentProps } from "react-router";

import styles from "./styles.module.css";
import ForgotPasswordForm, { ForgotPasswordValues } from './forgot-password-form';

const ForgotPasswordRoute = withRouter<any>(
	class ForgotPasswordRoute extends React.Component<RouteComponentProps<{}>, any> {
		handleSubmit = (payload: ForgotPasswordValues): void => {
			console.log(payload);
			this.props.history.push('/login');
		}
		render() {
			return (
				<div className={styles.forgot}>
					<Card interactive={true} elevation={Elevation.TWO}>
						<ForgotPasswordForm onSubmit={this.handleSubmit} />
					</Card>
				</div>
			);
		}
	}
)

class ForgotPassword extends React.Component<any, any> {
	render() {
		return <ForgotPasswordRoute />
	}
}

export default ForgotPassword;
