import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = (props) => {
	return (
		<React.Fragment>
			<div className="footer-wrapper">
				<div className="footer-gallery">
					<div className="footer-gallery__box footer-box-1">
						<h3>Certified Kindness Hero</h3>
						<Link to="/badges" className="footer-badge">
							<img
								src={require("../../images/CERTIFIED-KINDNESS-HERO.png")}
								alt="CERTIFIED-KINDNESS-HERO"
							/>
						</Link>
					</div>
					<div className="footer-gallery__box footer-box-2">
						<h3>Distant Cousin of Moses</h3>
						<Link to="/badges" className="footer-badge">
							<img
								src={require("../../images/DISTANT-COUSIN-OF-MOSES.png")}
								alt="Distant Cousin of Moses"
							/>
						</Link>
					</div>
					<div className="footer-gallery__box footer-box-3">
						<h3>Kindness Community Leader</h3>
						<Link to="/badges" className="footer-badge">
							<img
								src={require("../../images/KINDNESS-COMMUNITY-LEADER.png")}
								alt="Kindness Community Leader"
							/>
						</Link>
					</div>
					<div className="footer-gallery__box footer-box-4">
						<h3>Kindness Hero in Training</h3>
						<Link to="/badges" className="footer-badge">
							<img
								src={require("../../images/KINDNESS-HERO-IN-TRAINING.png")}
								alt="Kindness Hero in Training"
							/>
						</Link>
					</div>
					<div className="footer-gallery__box footer-box-5">
						<h3>Tubman Clone</h3>
						<Link to="/badges" className="footer-badge">
							<img
								src={require("../../images/TUBMAN-CLONE.png")}
								alt="Tubman Clone"
							/>
						</Link>
					</div>
				</div>
				<div className="footer-section">
					<div className="footer-section__one">
						<Link to="/">BLACKKIND</Link>
					</div>
					<div className="footer-section__two">
						<Link to="/">
							<FaFacebookSquare className="social-icons fa-2x" />
						</Link>
						<Link to="/">
							<FaTwitterSquare className="social-icons fa-2x" />
						</Link>
						<Link to="/">
							<FaInstagram className="social-icons fa-2x" />
						</Link>
						<Link to="/">
							<FaYoutube className="social-icons fa-2x" />
						</Link>
					</div>
					<div className="footer-section__three">
						<ul>
							<li>
								<Link to="/challenge">Challenges</Link>
							</li>
						</ul>
						<ul>
							<li>
								<Link to="/badges">Badges</Link>
							</li>
						</ul>
						<ul>
							<li>
								<Link to="/blog">Blog</Link>
							</li>
						</ul>
						<ul>
							<li>
								<Link to="/podcast">Podcast</Link>
							</li>
						</ul>
					</div>
				</div>
				<div className="footer-bottom">
					<p>Copyright &copy; 2020 BlackKind- All rights reserved</p>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Footer;
