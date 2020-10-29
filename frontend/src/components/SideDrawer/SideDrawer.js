import React from "react";

import { NavLink } from "react-router-dom";
import { FaInfo } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa";
import { BiBadgeCheck } from "react-icons/bi";
import { FaBlog } from "react-icons/fa";
import { FaPodcast } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";

import "./SideDrawer.css";

const sideDrawer = (props) => {
	let drawerClasses = "side-drawer";
	if (props.show) {
		drawerClasses = "side-drawer open";
	}
	return (
		<React.Fragment>
			<nav className={drawerClasses}>
				<div className="drawerClasses-logo__wrapper">
					<h1 className="side-drawer-logo">BLACK KIND</h1>
				</div>
				<ul>
					<li className="">
						<NavLink to="/about">
							<FaInfo className="side-drawer__icon" /> About
						</NavLink>
					</li>
					<li className="">
						<NavLink to="/challenges">
							<FaTrophy className="side-drawer__icon" />{" "}
							Challenges
						</NavLink>
					</li>
					<li className="">
						<NavLink to="/badges">
							<BiBadgeCheck className="side-drawer__icon" />{" "}
							Badges
						</NavLink>
					</li>

					<li className="">
						<NavLink to="/blog">
							<FaBlog className="side-drawer__icon" /> Blog
						</NavLink>
					</li>
					<li className="">
						<NavLink to="/podcast">
							<FaPodcast className="side-drawer__icon" /> Podcast
						</NavLink>
					</li>
					<li className="">
						<NavLink to="/profile">
							<FaUserAlt className="side-drawer__icon" /> Profile
						</NavLink>
					</li>
				</ul>
			</nav>
		</React.Fragment>
	);
};

export default sideDrawer;
