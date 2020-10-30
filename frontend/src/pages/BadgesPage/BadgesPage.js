import React from "react";
import Hero from "../../components/Hero/Hero";
import Banner from "../../components/Banner/Banner";

import "./BadgesPage.css";

const BadgesPage = (props) => {
	return (
		<React.Fragment>
			<Hero hero="badgeHero">
				<Banner
					title="Badges"
					subtitle="Lorem ipsum calendria"
				></Banner>
			</Hero>
			<div className="container">
				<div
					className="badge-table-wrapper"
					style={{ "overflow-x": "auto" }}
				>
					<table>
						<tr>
							<th>BADGE ICON</th>
							<th>BADGE NAME</th>
							<th>POINTS REQUIRED</th>
						</tr>
						<tr>
							<td>
								<img
									src={require("../../images/KINDNESS-HERO-IN-TRAINING.png")}
									alt="Kindness Hero in Training"
								/>
							</td>
							<td>Kindness Hero in Traning</td>
							<td>5</td>
						</tr>
						<tr>
							<td>
								<img
									src={require("../../images/DISTANT-COUSIN-OF-MOSES.png")}
									alt="Distant Cousin of Moses"
								/>
							</td>
							<td>Distant Cousin of Moses</td>
							<td>12</td>
						</tr>
						<tr>
							<td>
								<img
									src={require("../../images/TUBMAN-CLONE.png")}
									alt="Tubman Clone"
								/>
							</td>
							<td>Tubman</td>
							<td>19</td>
						</tr>
						<tr>
							<td>
								<img
									src={require("../../images/KINDNESS-COMMUNITY-LEADER.png")}
									alt="Kindness Community Leader"
								/>
							</td>
							<td>Kindness Community Leader</td>
							<td>40</td>
						</tr>
						<tr>
							<td>
								<img
									src={require("../../images/CERTIFIED-KINDNESS-HERO.png")}
									alt="CERTIFIED-KINDNESS-HERO"
								/>
							</td>
							<td>Certified Kindness Hero</td>
							<td>52</td>
						</tr>
					</table>
				</div>
			</div>
		</React.Fragment>
	);
};

export default BadgesPage;
