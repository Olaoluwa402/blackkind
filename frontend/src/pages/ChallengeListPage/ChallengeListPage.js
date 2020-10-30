import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Message from "../../components/Message/Message";
import Spinner from "../../components/Spinner/Spinner";
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import {
	listChallenges,
	deleteChallenge,
	createChallenge,
} from "../../actions/challengeActions";
import { CHALLENGE_CREATE_RESET } from "../../constants/challengeConstants";

import "./ChallengeListPage.css";

const ChallengeListPage = ({ history, match }) => {
	const dispatch = useDispatch();

	const challengeList = useSelector((state) => state.challengeList);
	const { loading, error, challenges } = challengeList;

	const challengeDelete = useSelector((state) => state.challengeDelete);
	const {
		loading: loadingDelete,
		error: errorDelete,
		success: successDelete,
	} = challengeDelete;

	const challengeCreate = useSelector((state) => state.challengeCreate);
	const {
		loading: loadingCreate,
		error: errorCreate,
		success: successCreate,
		challenge: createdChallenge,
	} = challengeCreate;

	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;

	useEffect(() => {
		dispatch({ type: CHALLENGE_CREATE_RESET });

		if (!userInfo.isAdmin) {
			history.push("/login");
		}

		if (successCreate) {
			history.push(`/admin/challenge/${createdChallenge._id}/edit`);
		} else {
			dispatch(listChallenges());
		}
	}, [
		dispatch,
		history,
		userInfo,
		successDelete,
		successCreate,
		createdChallenge,
	]);

	const deleteHandler = (id) => {
		if (window.confirm("Are you sure?")) {
			dispatch(deleteChallenge(id));
		}
	};

	const createChallengeHandler = () => {
		dispatch(createChallenge());
	};

	return (
		<React.Fragment>
			<div className="container">
				<div className="challenge-header">
					<div className="challenge-header__left">
						<h1>Challenges</h1>
					</div>
					<div className="challenge-header__right">
						<button
							className="my-3"
							onClick={createChallengeHandler}
						>
							<FaPlus /> Create Challenge
						</button>
					</div>
				</div>
			</div>

			{loadingDelete && <Spinner />}
			{errorDelete && (
				<Message message="dangerMessage">{errorDelete}</Message>
			)}

			{loadingCreate && <Spinner />}
			{errorCreate && (
				<Message message="dangerMessage">{errorCreate}</Message>
			)}

			{loading ? (
				<Spinner />
			) : error ? (
				<Message message="dangerMessage">{error}</Message>
			) : (
				<div className="">
					<div className="challenge-table-wrapper">
						<table>
							<thead>
								<tr>
									<th>ID</th>
									<th>NAME</th>
									<th>DESCRIPTION</th>
								</tr>
							</thead>
							<tbody>
								{challenges.map((challenge) => (
									<tr key={challenge._id}>
										<td>{challenge._id}</td>
										<td>{challenge.name}</td>
										<td>{challenge.description}</td>

										<td>
											<Link
												to={`/admin/challenge/${challenge._id}/edit`}
											>
												<button
													variant="light"
													className="btn-sm"
												>
													<FaEdit />
												</button>
											</Link>
											<button
												variant="danger"
												className="btn-sm"
												onClick={() =>
													deleteHandler(challenge._id)
												}
											>
												<FaTrashAlt />
											</button>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			)}
		</React.Fragment>
	);
};

export default ChallengeListPage;
