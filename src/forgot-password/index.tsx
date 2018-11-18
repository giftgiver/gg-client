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

class ForgotPassword extends React.Component<any, any> {
	render() {
		return (
			<div className={styles.forgot}>
				<Card interactive={true} elevation={Elevation.TWO}>
					<h2>Forgot Password?</h2>
					<form>
						<FormGroup
							label="email"
							labelFor="user-email"
							labelInfo="(required)"
						>
							<InputGroup id="user-email" />
						</FormGroup>
						<ButtonGroup>
							<Button>Submit</Button>
							<Link className="bp3-button" to="/login">Login</Link>
						</ButtonGroup>
					</form>
				</Card>
			</div>
		);
	}
}

export default ForgotPassword;
