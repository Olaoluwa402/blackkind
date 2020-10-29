import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ChallengePage from "./pages/ChallengePage/ChallengePage";
import BadgesPage from "./pages/BadgesPage/BadgesPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import BlogPage from "./pages/BlogPage";
import PodcastPage from "./pages/PodcastPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import ErrorPage from "./pages/ErrorPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";

import UserListPage from "./pages/UserListPage/UserListPage";
import UserEditPage from "./pages/UserEditPage/UserEditPage";
import ChallengeListPage from "./pages/ChallengeListPage/ChallengeListPage";
import ChallengeEditPage from "./pages/ChallengeEditPage/ChallengeEditPage";

import "./App.css";

const App = () => {
	const [SideDrawerOpen, setSideDrawerOpen] = useState(false);

	const drawerToggleClickHandler = () => {
		setSideDrawerOpen((prevState) => !prevState);
	};

	const backdropClickHandler = () => {
		setSideDrawerOpen(false);
	};

	let backdrop;
	if (SideDrawerOpen) {
		backdrop = <Backdrop click={backdropClickHandler} />;
	}

	return (
		<React.Fragment>
			<Router>
				<div className="wrapper">
					<Header drawerClickHandler={drawerToggleClickHandler} />
					<SideDrawer show={SideDrawerOpen} />
					{backdrop}
					<main>
						<Switch>
							<Route exact path="/login" component={LoginPage} />
							<Route
								exact
								path="/register"
								component={RegisterPage}
							/>
							<Route
								exact
								path="/profile"
								component={ProfilePage}
							/>

							<Route
								exact
								path="/challenges"
								component={ChallengePage}
							/>
							<Route
								exact
								path="/badges"
								component={BadgesPage}
							/>
							<Route exact path="/about" component={AboutPage} />
							<Route exact path="/blog" component={BlogPage} />
							<Route
								exact
								path="/podcast"
								component={PodcastPage}
							/>
							<Route
								exact
								path="/admin/userlist"
								component={UserListPage}
							/>
							<Route
								exact
								path="/admin/user/:id/edit"
								component={UserEditPage}
							/>
							<Route
								exact
								path="/admin/challengelist"
								component={ChallengeListPage}
							/>
							<Route
								exact
								path="/admin/challenge/:id/edit"
								component={ChallengeEditPage}
							/>

							<Route exact path="/" component={HomePage} />
							<Route component={ErrorPage} />
						</Switch>
					</main>
					<Footer />
				</div>
			</Router>
		</React.Fragment>
	);
};

export default App;
