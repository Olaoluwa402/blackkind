import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Hero from "../../components/Hero/Hero";
import Banner from "../../components/Banner/Banner";
// import { Link } from "react-router-dom";
// import { FaTrophy } from "react-icons/fa";

import Message from "../../components/Message/Message";
import Spinner from "../../components/Spinner/Spinner";
import { listChallenges } from "../../actions/challengeActions";
import ChallengeRow from "../../components/ChallengeRow/ChallengeRow";

import "./ChallengePage.css";

const ChallengePage = (prop) => {
	const [isComplete, setIsComplete] = useState(false);
	const dispatch = useDispatch();

	const challengeList = useSelector((state) => state.challengeList);
	const { loading, error, challenges } = challengeList;

	useEffect(() => {
		dispatch(listChallenges());
	}, [dispatch]);

	const submitHandler = (e) => {
		e.preventDefault();
		console.log(isComplete);
	};
	return (
		<React.Fragment>
			<Hero hero="challengeHero">
				<Banner
					title="Challenges"
					subtitle="Lorem ipsum calendria"
				></Banner>
			</Hero>

			{loading ? (
				<Spinner />
			) : error ? (
				<Message message="dangerMessage">{error}</Message>
			) : (
				<React.Fragment>
					<div className="">
						<div className="challenge-table-wrapper">
							<table>
								<thead>
									<tr>
										<th>Challenges</th>
										<th>Description</th>
										<th>Completed Challenge?</th>
										<th>Status</th>
									</tr>
								</thead>
								{challenges.map((challenge) => (
									<ChallengeRow
										key={challenge._id}
										challenge={challenge}
										submitHandler={submitHandler}
										isComplete={isComplete}
										setIsComplete={setIsComplete}
									/>
								))}
							</table>
						</div>
					</div>
				</React.Fragment>
			)}
		</React.Fragment>
	);
};

export default ChallengePage;
