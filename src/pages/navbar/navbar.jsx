import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { withRouter } from "react-router";
import {
	Nav,
	NavLink,
	Bars,
	NavMenu
} from './NavbarElements';
import { VscSignOut } from "react-icons/vsc";
import './navbar.css';

class Navigationbar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			islogout: false
		};
	}
	signOut = () => {
		localStorage.removeItem("token");
		this.setState({
			islogout: true
		});
	};
	render() {
		if (this.state.islogout) {
			return <Redirect to="/login" />;
		}
		return (
			<>
				<Nav>
					<NavLink to='/dashboard'>
						ChatBot
					</NavLink>
					<Bars />
					<NavMenu>
						<VscSignOut onClick={this.signOut} style={{ color: "white", cursor: "pointer" }} />
					</NavMenu>
				</Nav>
			</>
		);
	}
}

export default withRouter(Navigationbar);