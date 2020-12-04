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
	const challengeList = useSelector((state) => state.challengeList);
	const { loading, error, challenges } = challengeList;

	const [list, setList] = useState([]);
	const dispatch = useDispatch();

	// useEffect(() => {
	// 	dispatch(listChallenges());
	// }, [dispatch]);
	//
	useEffect(() => {
		setList(challenges);
		dispatch(listChallenges());
	}, [dispatch, challenges]);
	

	const handleChangeCheckbox = (id) => {
		setList(
			list.map((item) => {
				if (item.id === id) {
					return { ...item, isComplete: !item.isComplete };
				} else {
					return item;
				}
			})
		);
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
								{list.map((item) => (
									<ChallengeRow
										key={item._id}
										item={item}
										setList={setList}
										handleChangeCheckbox={
											handleChangeCheckbox
										}
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
