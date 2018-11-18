import * as React from "react";
import {
	Card,
	Elevation,
} from "@blueprintjs/core";
import { withRouter, RouteComponentProps } from "react-router";

import styles from "./styles.module.css";
import SignupForm, { SignupFormValues } from './signup-form';

const SignupRoute = withRouter<any>(
	class SignupComponent extends React.Component<RouteComponentProps<{}>, any> {
		handleSubmit = (payload: SignupFormValues): void => {
			console.log(payload);
			this.props.history.push('/givers');
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
