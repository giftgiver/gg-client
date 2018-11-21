import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';

interface ProtectedRouteProps {
	isAuthenticated: () => boolean;
	user: {id: string, name: string};
	component: React.Component;
	path: string;
}

interface State {
	loading: boolean,
}

class ProtectedRoute extends React.Component<ProtectedRouteProps, State> {
	static defaultProps: Partial<ProtectedRouteProps> = {
		isAuthenticated: () => false,
	}

	state = {
		loading: true,
	}

	renderRoute = (props: any) => {
		const { component, isAuthenticated } = this.props;
		const Component = component;
		if (!isAuthenticated()) {
			return <Redirect to="/" />
		}

		// if (this.state.loading) {
		// 	return <div>loading...</div>
		// }

		return <Component { ...props } />
	}

	render() {
		const { component: Component, ...rest } = this.props;
		return <Route { ...rest } render={ this.renderRoute } />
	}
}

export default ProtectedRoute;
