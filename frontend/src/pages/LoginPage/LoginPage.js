import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaRegEnvelope } from "react-icons/fa";
import { FaKey } from "react-icons/fa";
import { FaSignInAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Message from "../../components/Message/Message";
import Spinner from "../../components/Spinner/Spinner";
import { login } from "../../actions/userActions";

import "../../components/LoginForm/LoginForm.css";
import "./LoginPage.css";

const LoginPage = ({ location, history }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const dispatch = useDispatch();

	const userLogin = useSelector((state) => state.userLogin);
	const { loading, error, userInfo } = userLogin;
	const redirect = location.search ? location.search.split("=")[1] : "/";

	// userInfo will be null if not logged in
	useEffect(() => {
		if (userInfo) {
			history.push(redirect);
		}
	}, [history, userInfo, redirect]);

	const submitHandler = (e) => {
		e.preventDefault();
		// Dispatch login
		dispatch(login(email, password));
	};
	return (
		<React.Fragment>
			<div className="login-page-wrapper">
				<div className="login-header">
					<img src={require("../../images/login.jpeg")} alt="login" />
				</div>
				{loading && <Spinner />}
				{error && <Message message="dangerMessage">{error}</Message>}
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

export default LoginPage;
