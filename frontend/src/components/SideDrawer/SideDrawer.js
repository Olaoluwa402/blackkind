import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/userActions";
import { NavLink, Link } from "react-router-dom";
import { FaInfo } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { BiBadgeCheck } from "react-icons/bi";
import { FaBlog } from "react-icons/fa";
import { FaPodcast } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";

import "./SideDrawer.css";

const SideDrawer = (props) => {
	let drawerClasses = "side-drawer";
	if (props.show) {
		drawerClasses = "side-drawer open";
	}

	const dispatch = useDispatch();

	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;

	const logoutHandler = () => {
		dispatch(logout());
	};

	return (
		<React.Fragment>
			<nav className={drawerClasses}>
				<div className="drawerClasses-logo__wrapper">
					<h1 className="side-drawer-logo">BLACK KIND</h1>
				</div>
				<ul className="dropdown-user-icon" id="">
					<li className=" dropdown">
						{userInfo ? (
							<React.Fragment>
								<NavLink to="" className="nav-link dropbtn">
									<FaUser /> {userInfo.username}
								</NavLink>
								<div className="dropdown-content">
									<Link to="/profile">Profile</Link>
									<Link to="" onClick={logoutHandler}>
										Logout
									</Link>
								</div>
							</React.Fragment>
						) : (
							<Link to="/login" className="nav-link dropbtn">
								Login
							</Link>
						)}
					</li>
					<li className=" dropdown">
						{userInfo && userInfo.isAdmin && (
							<React.Fragment>
								<NavLink to="" className="nav-link dropbtn">
									<FaUser /> Admin
								</NavLink>
								<div className="dropdown-content">
									<Link to="/admin/userlist">Users</Link>
									<Link to="/admin/challengelist">
										Challenges
									</Link>
								</div>
							</React.Fragment>
						)}
					</li>
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
				</ul>
			</nav>
		</React.Fragment>
	);
};

export default SideDrawer;
