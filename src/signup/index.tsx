import * as React from "react";
import {
	Button,
	Card,
	Elevation,
	FormGroup,
	InputGroup,
	ButtonGroup,
} from "@blueprintjs/core";
import { Link } from 'react-router-dom';
import styles from "./styles.module.css";

class SignUp extends React.Component<any, any> {
	render() {
		return (
			<div className={styles.signup}>
				<Card interactive={true} elevation={Elevation.TWO}>
					<h2>Sign up</h2>
					<form>
						<FormGroup
							label="email"
							labelFor="user-email"
							labelInfo="(required)"
						>
							<InputGroup id="user-email" />
						</FormGroup>
						<FormGroup
							label="password"
							labelFor="user-password"
							labelInfo="(required)"
						>
							<InputGroup id="user-password" />
						</FormGroup>
						<FormGroup
							label="confirm password"
							labelFor="user-password-confirm"
							labelInfo="(required)"
						>
							<InputGroup id="user-password-confirm" />
						</FormGroup>
						<ButtonGroup>
							<Button>Submit</Button>
							<Link className="bp3-button" to="/login">Log in</Link>
						</ButtonGroup>
					</form>
				</Card>
			</div>
		);
	}
}


export default SignUp;
