import React, { Component } from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

export class Header extends Component {
	render() {
		return (
			<AppBar position="static" color="primary">
				<Toolbar>
					<Typography variant="h4" color="inherit">
						Star Wars - The Front Revenge 
					</Typography>
				</Toolbar>
			</AppBar>
		);
	}
}

export default Header;
