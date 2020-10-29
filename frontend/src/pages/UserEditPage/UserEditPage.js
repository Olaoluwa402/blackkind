import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Message from "../../components/Message/Message";
import Spinner from "../../components/Spinner/Spinner";
import { getUserDetails, updateUser } from "../../actions/userActions";
import { USER_UPDATE_RESET } from "../../constants/userConstants";

const UserEditPage = ({ match, history }) => {
	const userId = match.params.id;

	const [fullName, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [occupation, setOccupation] = useState("");
	const [country, setCountry] = useState("");
	const [website, setWebsite] = useState("");
	const [username, setUsername] = useState("");
	const [biodata, setBiodata] = useState("");
	const [isAdmin, setIsAdmin] = useState(false);

	const dispatch = useDispatch();

	const userDetails = useSelector((state) => state.userDetails);
	const { loading, error, user } = userDetails;

	const userUpdate = useSelector((state) => state.userUpdate);
	const {
		loading: loadingUpdate,
		error: errorUpdate,
		success: successUpdate,
	} = userUpdate;

	// userInfo will be null if not logged in
	useEffect(() => {
		if (successUpdate) {
			dispatch({ type: USER_UPDATE_RESET });
			history.push("/admin/userlist");
		} else {
			if (!user.username || user._id !== userId) {
				dispatch(getUserDetails(userId));
			} else {
				setFullName(user.fullName);
				setEmail(user.email);
				setIsAdmin(user.isAdmin);
				setOccupation(user.occupation);
				setCountry(user.country);
				setBiodata(user.biodata);
				setUsername(user.username);
				setWebsite(user.website);
			}
		}
	}, [dispatch, history, userId, user, successUpdate]);

	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(
			updateUser({
				_id: userId,
				fullName,
				email,
				isAdmin,
				website,
				occupation,
				country,
				biodata,
				username,
			})
		);
	};

	return (
		<React.Fragment>
			<Link to="/admin/userlist" className="btn">
				Go Back
			</Link>
			<div className="container">
				<div className="register-page">
					<div className="register-header">
						<h2>
							<FaEdit /> Update
						</h2>
					</div>
					{loadingUpdate && <Spinner />}
					{errorUpdate && (
						<Message message="dangerMessage">{errorUpdate}</Message>
					)}
					{loading ? (
						<Spinner />
					) : error ? (
						<Message message="dangerMessage">{error}</Message>
					) : (
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
									<label htmlFor="website">isAdmin</label>
									<input
										type="checkbox"
										label="Is Admin"
										checked={isAdmin}
										onChange={(e) =>
											setIsAdmin(e.target.checked)
										}
									></input>
								</div>

								<div className="form-actions">
									<button type="submit">Update</button>
								</div>
							</form>
						</div>
					)}
				</div>
			</div>
		</React.Fragment>
	);
};

export default UserEditPage;
