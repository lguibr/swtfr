import React, { Component } from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import ForceSwitch from "./foreceSwitch/ForceSwitch";
import { Link } from "react-router-dom";

export class Header extends Component {
	render() {
		const { toggleTheme } = this.props;
		return (
			<AppBar position="static" color="primary">
				<Toolbar>
					<Link style={{ textDecoration: "none", flex: 1 }} to="/">
						<Typography variant="body2" color="secondary">
							<i className="swg swg-6x swg-starwars " />
						</Typography>
					</Link>

					<ForceSwitch toggleTheme={toggleTheme} />
				</Toolbar>
			</AppBar>
		);
	}
}

export default Header;
