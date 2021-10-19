import React, { Component } from "react";
import { withRouter } from "react-router";
import "./dashboard.css";

class Dashboard extends Component {
	render() {
		return (
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					height: '90vh'
				}}
			>
				<h1>Home</h1>
			</div>
		);
	}
}

export default withRouter(Dashboard);