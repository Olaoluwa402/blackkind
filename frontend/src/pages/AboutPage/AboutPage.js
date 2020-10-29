import React from "react";
import Hero from "../../components/Hero/Hero";
import Banner from "../../components/Banner/Banner";

import "./AboutPage.css";

const AboutPage = (props) => {
	return (
		<React.Fragment>
			<Hero hero="aboutHero">
				<Banner
					title="About Us"
					subtitle="Lorem ipsum calendria"
				></Banner>
			</Hero>

			<div className="container">
				<section className="about-blackkind">
					<div className="about-blackkind__left">
						<img src={require("../../images/bg2.jpg")} alt="" />
					</div>
					<div className="about-blackkind__right">
						<h2>Black Kind</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing
							elit. Quas odio, illum perferendis ratione laborum
							esse, veritatis aspernatur repellendus soluta sint
							nostrum, temporibus labore unde velit iusto?
							Excepturi dolorum, molestiae fugit.
						</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing
							elit. Quas odio, illum perferendis ratione laborum
							esse, veritatis aspernatur repellendus soluta sint
							nostrum, temporibus labore unde velit iusto?
							Excepturi dolorum, molestiae fugit.
						</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing
							elit. Quas odio, illum perferendis ratione laborum
							esse, veritatis aspernatur repellendus soluta sint
							nostrum, temporibus labore unde velit iusto?
							Excepturi dolorum, molestiae fugit.
						</p>
					</div>
				</section>
			</div>
		</React.Fragment>
	);
};

export default AboutPage;
