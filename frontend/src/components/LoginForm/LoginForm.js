import React from "react";
import { Link } from "react-router-dom";
import { FaRegEnvelope } from "react-icons/fa";
import { FaKey } from "react-icons/fa";
import { FaSignInAlt } from "react-icons/fa";

import "./LoginForm.css";

const LoginForm = ({
	redirect,
	submitHandler,
	email,
	password,
	setEmail,
	setPassword,
}) => {
	return (
		<React.Fragment>
			<div className="wrapper-login-wrapper__main">
				<div className="login-header">
					<img src={require("../../images/login.jpeg")} alt="login" />
				</div>
				<div className="login-form-wrapper">
					<form className="login-form" onSubmit={submitHandler}>
						<div className="form-control">
							<label htmlFor="email">
								<FaRegEnvelope className="login-icons" />
							</label>
							<input
								type="email"
								id="email"
								placeholder="Enter your email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							></input>
						</div>
						<div className="form-control">
							<label htmlFor="password">
								<FaKey className="login-icons" />
							</label>
							<input
								type="password"
								id="password"
								placeholder="Enter your password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							></input>
						</div>
						<div className="form-actions">
							<button type="submit">
								<FaSignInAlt /> LOGIN
							</button>
						</div>
						<p>
							Don't have an account yet?{" "}
							<Link
								to={
									redirect
										? `/register?redirect=${redirect}`
										: "/register"
								}
							>
								Register
							</Link>
						</p>
					</form>
				</div>
			</div>
		</React.Fragment>
	);
};

export default LoginForm;
