import React, { Component } from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import ForceSwitch from "./foreceSwitch/ForceSwitch";

export class Header extends Component {
	render() {
		const { toggleTheme } = this.props;
		return (
			<AppBar position="static" color="primary">
				<Toolbar>
					<Typography
						variant="h4"
						color="inherit"
						style={{ flex: 1 }}
					>
						Star Wars - The Front Revenge
					</Typography>
					<ForceSwitch toggleTheme={toggleTheme} />
				</Toolbar>
			</AppBar>
		);
	}
}

export default Header;
