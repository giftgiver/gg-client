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

class Login extends React.Component<any, any> {
	render() {
		return (
			<div className={styles.login}>
				<Card interactive={true} elevation={Elevation.TWO}>
					<h2>login</h2>
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
						<ButtonGroup>
							<Button>Submit</Button>
							<Link className="bp3-button" to="/forgot-password">Forgot password</Link>
							<Link className="bp3-button" to="/signup">Sign Up</Link>
						</ButtonGroup>
					</form>
				</Card>
			</div>
		);
	}
}

export default Login;
