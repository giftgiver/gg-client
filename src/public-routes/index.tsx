import * as React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import ForgotPassword from "./forgot-password";
import LandingPage from "./landing-page/landing-page";
import Login from "./login";
import Signup from "./signup";
import Nav from "./nav";

class PublicRoutes extends React.Component<any, any> {
	render() {
		return (
			<Router>
				<div>
					<Nav />
					<Switch>
						<Route exact path="/" component={LandingPage} />
						<Route exact path="/login" component={Login} />
						<Route exact path="/signup" component={Signup} />
						<Route exact path="/forgot-password" component={ForgotPassword} />
					</Switch>
				</div>
			</Router>
		);
	}
}

export default PublicRoutes;
