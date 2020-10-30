import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Hero from "../../components/Hero/Hero";
import Banner from "../../components/Banner/Banner";
import LoginForm from "../../components/LoginForm/LoginForm";
import { FaTrophy } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Message from "../../components/Message/Message";
import Spinner from "../../components/Spinner/Spinner";
import { login } from "../../actions/userActions";

import "./HomePage.css";

const HomePage = ({ location, history }) => {
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
			<Hero>
				<Banner
					title="Black Kind"
					subtitle="Lend a helping Hand to the other!"
				>
					<Link to="/challenges" className="btn-primary">
						<FaTrophy /> Challenges
					</Link>
				</Banner>
			</Hero>
			<main className="">
				{loading && <Spinner />}
				{error && <Message message="dangerMessage">{error}</Message>}
				<section className="login-section" id="login">
					<div className="login-section__left">
						<img
							src={require("../../images/bg4.jpg")}
							alt="home-banner"
						/>
					</div>
					<div className="login-section__right">
						<LoginForm
							submitHandler={submitHandler}
							email={email}
							password={password}
							redirect={redirect}
							setEmail={setEmail}
							setPassword={setPassword}
						/>
					</div>
				</section>
			</main>
			<a href="#login" className="arrow-down ">
				<span>
					<FaArrowDown />
				</span>
			</a>
		</React.Fragment>
	);
};

export default HomePage;
