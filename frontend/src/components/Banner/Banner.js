import React from "react";
import "./Banner.css";

const Banner = ({ children, title, subtitle }) => {
	return (
		<div className="banner unique_underline">
			<h1>{title}</h1>
			<p>{subtitle}</p>
			{children}
		</div>
	);
};

export default Banner;
