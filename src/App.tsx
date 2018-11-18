import * as React from "react";
import AppRouting from './app-routing';

class App extends React.Component<any, any> {
	render() {
		return (
			<div className="App">
				<AppRouting />
			</div>
		);
	}
}

export default App;
