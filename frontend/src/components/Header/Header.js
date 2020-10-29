import React from "react";
import { NavLink, Link } from "react-router-dom";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/userActions";
import { FaUser } from "react-icons/fa";

import "./Header.css";

const Header = ({ drawerClickHandler }) => {
	const dispatch = useDispatch();

	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;

	const logoutHandler = () => {
		dispatch(logout());
	};

	return (
		<React.Fragment>
			<header className="main-navigation">
				<div className="navbar__toggle-button">
					<DrawerToggleButton click={drawerClickHandler} />
				</div>
				<div className="main-navigation__logo">
					<NavLink to="/">
						<h1>BlackKind</h1>
					</NavLink>
				</div>
				<div className="main-navigation__spacer"></div>
				<nav className="main-navigation__items">
					<ul>
						<li className="hide-mobile">
							<NavLink to="/about" className="nav-link">
								About
							</NavLink>
						</li>
						<li className="hide-mobile">
							<NavLink to="/challenges" className="nav-link">
								Challenges
							</NavLink>
						</li>
						<li className="hide-mobile">
							<NavLink to="/badges" className="nav-link">
								Badges
							</NavLink>
						</li>
						<li className="hide-mobile">
							<NavLink to="/blog" className="nav-link">
								Blog
							</NavLink>
						</li>
						<li className="hide-mobile">
							<NavLink to="/podcast" className="nav-link">
								Podcast
							</NavLink>
						</li>
						<li className="hide-mobile dropdown">
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
						<li className="hide-mobile dropdown">
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
					</ul>
				</nav>
			</header>
		</React.Fragment>
	);
};

export default Header;
