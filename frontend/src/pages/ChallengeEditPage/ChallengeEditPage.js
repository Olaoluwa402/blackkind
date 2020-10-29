import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Message from "../../components/Message/Message";
import Spinner from "../../components/Spinner/Spinner";
import {
	listChallengeDetails,
	updateChallenge,
} from "../../actions/challengeActions";
import { CHALLENGE_UPDATE_RESET } from "../../constants/challengeConstants";

const ChallengeEditPage = ({ match, history }) => {
	const challengeId = match.params.id;

	const [name, setName] = useState("");
	const [description, setDescription] = useState("");

	const dispatch = useDispatch();

	const challengeDetails = useSelector((state) => state.challengeDetails);
	const { loading, error, challenge } = challengeDetails;

	const challengeUpdate = useSelector((state) => state.challengeUpdate);
	const {
		loading: loadingUpdate,
		error: errorUpdate,
		success: successUpdate,
	} = challengeUpdate;

	// userInfo will be null if not logged in
	useEffect(() => {
		if (successUpdate) {
			dispatch({ type: CHALLENGE_UPDATE_RESET });
			history.push("/admin/challengelist");
		} else {
			if (!challenge.name || challenge._id !== challengeId) {
				dispatch(listChallengeDetails(challengeId));
			} else {
				setName(challenge.name);
				setDescription(challenge.description);
			}
		}
	}, [dispatch, history, challengeId, challenge, successUpdate]);

	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(
			updateChallenge({
				_id: challengeId,
				name,
				description,
			})
		);
	};

	return (
		<React.Fragment>
			<Link to="/admin/productlist" className="btn">
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
									<label htmlFor="name">name</label>
									<input
										type="text"
										id="name"
										placeholder="Enter name"
										value={name}
										onChange={(e) =>
											setName(e.target.value)
										}
									></input>
								</div>
								<div className="form-control">
									<label htmlFor="description">
										Description
									</label>
									<input
										type="text"
										id="description"
										placeholder="Enter your description"
										value={description}
										onChange={(e) =>
											setDescription(e.target.value)
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

export default ChallengeEditPage;
