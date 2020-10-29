import React from "react";

import "./DrawerToggleButton.css";

const drawerToggleButton = ({ click }) => (
	<React.Fragment>
		<div className="menu-toggler" onClick={click}>
			<div className="bar half start"></div>
			<div className="bar"></div>
			<div className="bar half end"></div>
		</div>
	</React.Fragment>
);

export default drawerToggleButton;
