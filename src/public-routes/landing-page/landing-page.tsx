import * as React from "react";
import { Colors } from "@blueprintjs/core";
import styles from './styles.module.css';

class LandingPage extends React.Component<any, any> {
	render() {
		return (
			<div className={styles.landing_page} style={{ color: Colors.BLUE3, background: Colors.BLACK }}>
				landing page
			</div>
		);
	}
}

export default LandingPage;
