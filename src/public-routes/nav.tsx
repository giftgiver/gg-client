import * as React from "react";
import { Navbar, Alignment } from "@blueprintjs/core";
import { Link } from "react-router-dom";
import { Icon } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";

class Nav extends React.Component<any, any> {
	render() {
		return (
			<Navbar>
				<Navbar.Group align={Alignment.LEFT}>
					<Navbar.Heading><Link to="/">GiftGiver</Link></Navbar.Heading>
				</Navbar.Group>
				<Navbar.Group align={Alignment.RIGHT}>
					<Link className="pt-button pt-minimal pt-icon-user" to="/login">
						<Icon icon={IconNames.USER} />
					</Link>
				</Navbar.Group>
			</Navbar>
		);
	}
}

export default Nav;
