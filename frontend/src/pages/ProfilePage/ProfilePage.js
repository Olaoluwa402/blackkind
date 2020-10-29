import React, { useState, useEffect } from "react";
import { FaUserPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Message from "../../components/Message/Message";
import Spinner from "../../components/Spinner/Spinner";
import { getUserDetails, updateUserProfile } from "../../actions/userActions";
import { USER_UPDATE_PROFILE_RESET } from "../../constants/userConstants";

import "./ProfilePage.css";

const ProfilePage = ({ location, history }) => {
	const [fullName, setFullName] = useState("");
	const [username, setUsername] = useState("");
	const [biodata, setBiodata] = useState("");
	const [occupation, setOccupation] = useState("");
	const [website, setWebsite] = useState("");
	const [country, setCountry] = useState("");
	const [email, setEmail] = useState("");
	const [point, setPoint] = useState("");
	const [level, setLevel] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [message, setMessage] = useState(null);

	const dispatch = useDispatch();

	const userDetails = useSelector((state) => state.userDetails);
	const { loading, error, user } = userDetails;

	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;

	const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
	const { success } = userUpdateProfile;

	// userInfo will be null if not logged in
	useEffect(() => {
		if (!userInfo) {
			history.push("/login");
		} else {
			if (!user.username || success) {
				dispatch({ type: USER_UPDATE_PROFILE_RESET });
				dispatch(getUserDetails("profile"));
			} else {
				setUsername(user.username);
				setEmail(user.email);
				setBiodata(user.biodata);
				setOccupation(user.occupation);
				setWebsite(user.website);
				setCountry(user.country);
				setFullName(user.fullName);
				setPoint(user.pointCount);
				setLevel(user.level);
			}
		}
	}, [dispatch, history, userInfo, user, success]);

	const submitHandler = (e) => {
		e.preventDefault();
		// Dispatch register
		if (password !== confirmPassword) {
			setMessage("Passwords do not match");
		} else {
			dispatch(
				updateUserProfile({
					id: user._id,
					fullName,
					username,
					biodata,
					website,
					occupation,
					country,
					email,
					password,
				})
			);
		}
	};

	return (
		<React.Fragment>
			<div className="profile-wrapper">
				<div className="profile-wrapper__left profile-wrapper__box">
					<div className="profile-page-wrapper">
						<div className="profile-page__header">
							<h2>
								<FaUserPlus /> Profile
							</h2>
						</div>
						<div className="profile-page-form-wrapper">
							{error && (
								<Message message="defaultMessage">
									{error}
								</Message>
							)}
							{success && (
								<Message message="defaultMessage">
									Profile Updated!
								</Message>
							)}
							{message && (
								<Message message="defaultMessage">
									{message}
								</Message>
							)}
							{loading && <Spinner />}
							<form
								className="profile-page__form"
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
										id="fullName"
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
										onChange={(e) =>
											setEmail(e.target.value)
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
										onChange={(e) =>
											setCountry(e.target.value)
										}
									></input>
								</div>

								<div className="form-control">
									<label htmlFor="occupation">
										Occupation
									</label>
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
										onChange={(e) =>
											setBiodata(e.target.value)
										}
									></textarea>
								</div>

								<div className="form-control">
									<label htmlFor="website">Website</label>
									<input
										type="text"
										id="website"
										placeholder="Enter your Website url (if any)"
										value={website}
										onChange={(e) =>
											setWebsite(e.target.value)
										}
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
									<label htmlFor="points">Points</label>
									<input
										type="text"
										id="points"
										value={point}
										onChange={(e) =>
											setPoint(e.target.value)
										}
										disabled
									></input>
								</div>
								<div className="form-control">
									<label htmlFor="level">Level</label>
									<input
										type="text"
										id="level"
										value={level}
										onChange={(e) =>
											setLevel(e.target.value)
										}
										disabled
									></input>
								</div>

								<div className="form-actions">
									<button type="submit">Update</button>
								</div>
							</form>
						</div>
					</div>
				</div>
				<div className="profile-wrapper__right profile-wrapper__box">
					<h1>Completed challenges</h1>
				</div>
			</div>
		</React.Fragment>
	);
};

export default ProfilePage;
