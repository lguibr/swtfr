import React, { Component } from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import ForceSwitch from "./foreceSwitch/ForceSwitch";
import { HashRouter, Route, Link } from "react-router-dom";

export class Header extends Component {
	render() {
		const { toggleTheme } = this.props;
		return (
			<AppBar position="static" color="primary">
				<Toolbar>
					<Link style={{ textDecoration: "none", flex: 1 }} to="/">
						<Typography variant="h4" color="secondary">
							Star Wars - The Front Revenge
						</Typography>
					</Link>

					<ForceSwitch toggleTheme={toggleTheme} />
				</Toolbar>
			</AppBar>
		);
	}
}

export default Header;
