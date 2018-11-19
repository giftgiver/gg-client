import * as React from "react";
import { Route, BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import Givers from "./givers";
import PublicRoutes from './public-routes';

class AppRouting extends React.Component<any, any> {
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path="/" component={PublicRoutes} />
					<Route exact path="/givers" component={Givers} />
					<Route path="*" component={PublicRoutes} />
				</Switch>
			</Router>
		);
	}
}

export default AppRouting;
