import React from "react";
import { Link } from "react-router-dom";
import { FaRegEnvelope } from "react-icons/fa";
import { FaKey } from "react-icons/fa";
import { FaSignInAlt } from "react-icons/fa";

import Message from "../../components/Message/Message";
import Spinner from "../../components/Spinner/Spinner";

import "./LoginForm.css";

const LoginForm = ({
	redirect,
	submitHandler,
	email,
	password,
	setEmail,
	setPassword,
	loading,
	success,
	error,
	userInfo,
}) => {
	return (
		<React.Fragment>
			<div className="wrapper-login-wrapper__main">
				<div className="login-header">
					<img src={require("../../images/login.jpeg")} alt="login" />
				</div>
				{loading && <Spinner />}
				{error && <Message message="dangerMessage">{error}</Message>}
				{success && (
					<Message message="defaultMessage">
						Welcome back {userInfo.username}
					</Message>
				)}
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
