import React from "react";
import { FaCheck } from "react-icons/fa";

import "./ChallengeRow.css";
const ChallengeRow = ({
	challenge,
	submitHandler,
	isComplete,
	setIsComplete,
}) => {
	return (
		<React.Fragment>
			<tbody>
				<tr>
					<td>{challenge.name}</td>
					<td>{challenge.description}</td>
					<td>
						<form
							className="challenge-submit-btn"
							onSubmit={submitHandler}
						>
							<input
								type="checkbox"
								id="challenge"
								onChange={(e) =>
									setIsComplete(e.target.checked)
								}
								className="checkbox-larger"
							/>
							<button type="submit">
								<FaCheck />
							</button>
						</form>
					</td>
					<td>{challenge.status}</td>
				</tr>
			</tbody>
		</React.Fragment>
	);
};

export default ChallengeRow;
