import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaUserPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Message from "../../components/Message/Message";
import Spinner from "../../components/Spinner/Spinner";
import { register } from "../../actions/userActions";

import "./RegisterPage.css";

const RegisterPage = ({ location, history }) => {
	const [fullName, setFullName] = useState("");
	const [username, setUsername] = useState("");
	const [biodata, setBiodata] = useState("");
	const [occupation, setOccupation] = useState("");
	const [website, setWebsite] = useState("");
	const [country, setCountry] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [message, setMessage] = useState(null);

	const dispatch = useDispatch();

	const userRegister = useSelector((state) => state.userRegister);
	const { loading, error, userInfo } = userRegister;
	const redirect = location.search ? location.search.split("=")[1] : "/";

	// userInfo will be null if not logged in
	useEffect(() => {
		if (userInfo) {
			history.push(redirect);
		}
	}, [history, userInfo, redirect]);

	const submitHandler = (e) => {
		e.preventDefault();
		// Dispatch register
		if (password !== confirmPassword) {
			setMessage("Passwords do not match");
		} else {
			dispatch(
				register(
					fullName,
					username,
					biodata,
					website,
					occupation,
					country,
					email,
					password
				)
			);
		}
	};
	return (
		<React.Fragment>
			<div className="container">
				<div className="register-page">
					<div className="register-header">
						<h2>
							<FaUserPlus /> SIGN-UP
						</h2>
					</div>
					{error && (
						<Message message="dangerMessage">{error}</Message>
					)}
					{message && (
						<Message message="dangerMessage">{message}</Message>
					)}
					{loading && <Spinner />}
					<div className="register-form-wrapper">
						<form
							className="register-form"
							onSubmit={submitHandler}
						>
							<div className="form-control">
								<label htmlFor="username">Username</label>
								<input
									type="text"
									id="username"
									placeholder="Enter your username"
									value={username}
									onChange={(e) =>
										setUsername(e.target.value)
									}
								></input>
							</div>
							<div className="form-control">
								<label htmlFor="fullname">Full Name</label>
								<input
									type="text"
									id="fullname"
									placeholder="Enter your full name"
									value={fullName}
									onChange={(e) =>
										setFullName(e.target.value)
									}
								></input>
							</div>
							<div className="form-control">
								<label htmlFor="email">E-mail</label>
								<input
									type="email"
									id="email"
									placeholder="Enter your email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								></input>
							</div>
							<div className="form-control">
								<label htmlFor="password">Password</label>
								<input
									type="password"
									id="password"
									placeholder="Enter your password"
									value={password}
									onChange={(e) =>
										setPassword(e.target.value)
									}
								></input>
							</div>
							<div className="form-control">
								<label htmlFor="password">
									Confirm password
								</label>
								<input
									type="password"
									id="password"
									placeholder="Confirm password"
									value={confirmPassword}
									onChange={(e) =>
										setConfirmPassword(e.target.value)
									}
								></input>
							</div>

							<div className="form-control">
								<label htmlFor="country">Country</label>
								<input
									type="text"
									id="country"
									placeholder="Enter your country name"
									value={country}
									onChange={(e) => setCountry(e.target.value)}
								></input>
							</div>

							<div className="form-control">
								<label htmlFor="occupation">Occupation</label>
								<input
									type="text"
									id="occupation"
									placeholder="Enter your occupation"
									value={occupation}
									onChange={(e) =>
										setOccupation(e.target.value)
									}
								></input>
							</div>
							<div className="form-control">
								<label htmlFor="biodata">Biodata</label>
								<textarea
									id="biodata"
									cols="30"
									rows="5"
									placeholder="Tell us something about yourself"
									value={biodata}
									onChange={(e) => setBiodata(e.target.value)}
								></textarea>
							</div>

							<div className="form-control">
								<label htmlFor="website">Website</label>
								<input
									type="text"
									id="website"
									placeholder="Enter your Website url (if any)"
									value={website}
									onChange={(e) => setWebsite(e.target.value)}
								></input>
							</div>

							<div className="form-actions">
								<button type="submit">SIGN-UP</button>
							</div>
							<p>
								Already have an account?{" "}
								<Link
									to={
										redirect
											? `/?redirect=${redirect}`
											: "/"
									}
								>
									Login
								</Link>
							</p>
						</form>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default RegisterPage;
