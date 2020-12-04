import React from "react";
import { FaCheck } from "react-icons/fa";

import "./ChallengeRow.css";
const ChallengeRow = ({ item, setList, handleChangeCheckbox }) => {
	console.log(item);
	return (
		<React.Fragment>
			<tbody>
				<tr>
					<td>{item.name}</td>
					<td>{item.description}</td>
					<td>
						<input
							type="checkbox"
							checked={item.isComplete}
							onChange={() => handleChangeCheckbox(item.id)}
							className="checkbox-larger"
						/>
					</td>
					<td>{item.status}</td>
				</tr>
			</tbody>
		</React.Fragment>
	);
};

export default ChallengeRow;
