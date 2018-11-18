import * as React from "react";
import { Route, BrowserRouter as Router, Switch, RouteProps } from "react-router-dom";
import ForgotPassword from "./forgot-password";
import Givers from "./givers";
import LandingPage from "./landing-page";
import Login from "./login";
import Signup from "./signup";
import Nav from './nav';

class AppRouting extends React.Component<any, any> {
	render() {
		return (
			<Router>
				<div>
					<Nav />
					<Switch>
						<Route exact path="/" component={LandingPage} />
						<Route exact path="/forgot-password" component={ForgotPassword} />
						<Route exact path="/login" component={ Login } />
						<Route exact path="/signup" component={Signup} />
						<Route exact path="/givers" component={Givers} />
					</Switch>

				</div>
			</Router>
		);
	}
}

export default AppRouting;
