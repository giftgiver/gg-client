import * as React from "react";
import { Navbar, Alignment, Button } from '@blueprintjs/core';
import { Link } from 'react-router-dom';
import { Icon, Intent } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";

class LandingPage extends React.Component<any, any> {
	render() {
		return (
			<div>
				<Navbar>
					<Navbar.Group align={Alignment.LEFT}>
						<Navbar.Heading>GiftGiver</Navbar.Heading>
					</Navbar.Group>
					<Navbar.Group align={Alignment.RIGHT}>
						<Link className="pt-button pt-minimal pt-icon-user" to="/login">
							<Icon icon={IconNames.USER} />
						</Link>
					</Navbar.Group>
				</Navbar>
			</div>
		);
	}
}

export default LandingPage;
