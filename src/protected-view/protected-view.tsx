import * as React from 'react';
import { Switch, Route } from 'react-router';
import Givers from './routes/givers';

class ProtectedView extends React.Component<any> {
	render() {
		return (
			<div className="protected-view">
				<div className="protected-view__body">
					<Switch>
						<Route path="/" component={ Givers } />
					</Switch>
				</div>
			</div>
		)
	}
}

export default ProtectedView;
