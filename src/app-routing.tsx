import * as React from "react";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import PublicRoutes from "./public-routes";
import ProtectedRoute from "./protected-route";
import ProtectedView from "./protected-view/protected-view";

class AppRouting extends React.Component<any, any> {
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path="/" component={PublicRoutes} />
					<ProtectedRoute path="/givers" isAuthenticated={() => true } component={ProtectedView} />
					<Route
						path="*"
						render={() => (
							<div>
								These are not the droids you're looking for{" "}
								<Link to="/">Go back</Link>
							</div>
						)}
					/>
				</Switch>
			</Router>
		);
	}
}

export default AppRouting;
