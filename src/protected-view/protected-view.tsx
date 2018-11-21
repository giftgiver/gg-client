import * as React from 'react';
import { Switch, Route } from 'react-router';

const Foo = () => <div>foo</div>;

class ProtectedView extends React.Component<any> {
	render() {
		return (
			<div className="protected-view">
				<div className="protected-view__body">
					<Switch>
						<Route path="/" component={ Foo } />
					</Switch>
				</div>
			</div>
		)
	}
}

export default ProtectedView;
