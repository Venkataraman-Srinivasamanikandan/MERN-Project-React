import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import regex from '../../helper/regex';
import Api from '../../helper/api.jsx';

import "./login.css";

const api = new Api();
class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			islogged: false,
			errors: {
				afteSubmit: "",
				email: "",
				password: ""
			},
			loginParams: {
				email: "",
				password: ""
			}
		};
	}
	handleFormChange = event => {
		let loginParamsNew = { ...this.state.loginParams };
		let val = event.target.value;
		loginParamsNew[event.target.name] = val;
		this.setState({
			loginParams: loginParamsNew
		});
	};

	login = async event => {
		event.preventDefault();
		if (this.login_validation()) {
			var { status, data } = await api.post('/login', this.state.loginParams);
			if (status) {
				localStorage.setItem("token", "T");
				this.setState({
					islogged: true
				});
			}
			else {
				this.setState({
					"errors": {
						afteSubmit: data.message
					}
				})
			}
		}
	};

	login_validation() {
		var input = this.state.loginParams, isValid = true, errors = {};
		if (!input["email"]) {
			isValid = false;
			errors["email"] = "Please enter your email Address.";
		}

		if (typeof input["email"] !== "undefined") {
			var pattern = new RegExp(regex.email);
			if (!pattern.test(input["email"])) {
				isValid = false;
				errors["email"] = "Please enter valid email address.";
			}
		}

		if (!input["password"]) {
			isValid = false;
			errors["password"] = "Please enter your password.";
		}

		this.setState({
			errors: errors
		});

		return isValid;

	}

	render() {
		if (localStorage.getItem("token")) {
			return <Redirect to="/" />;
		}
		return (
			<div className="container main-container">
				<form onSubmit={this.login} className="form-signin">
					<div className="login-box">
						<div className="header">
							<h2>Login Page</h2>
						</div>
						<div className="login">
							<div className="forget-box">
								<p className="danger">{this.state.errors.afteSubmit}</p>
							</div>
							<div className="form-control1">
								<input
									type="text"
									name="email"
									className="tbox"
									onChange={this.handleFormChange}
									placeholder="Enter Email"
								/>
								<p className="danger">{this.state.errors.email}</p>
							</div>
							<div className="form-control1">
								<input
									type="password"
									name="password"
									onChange={this.handleFormChange}
									className="tbox"
									placeholder="Enter Password"
								/>
								<p className="danger">{this.state.errors.password}</p>
							</div>
							<div className="form-control1">
								<input type="submit" value="Login" className="btn" />
							</div>
						</div>
					</div>
				</form>
			</div>
		);
	}
}
export default Login;