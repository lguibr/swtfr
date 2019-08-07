import React, { Component } from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import ForceSwitch from "./foreceSwitch/ForceSwitch";
import { Link } from "react-router-dom";

export class Header extends Component {
	render() {
		const { toggleTheme } = this.props;
		const title = this.props.history.location.pathname
			.split("/")[1]
			.toUpperCase();
		console.error(this.props);
		return (
			<AppBar position="static" color="primary">
				<Toolbar>
					{title && (
						<Typography
							style={{
								transform: "rotate(180deg)"
							}}
							onClick={this.props.history.goBack}
							variant="body2"
							color="secondary"
						>
							<i className="swg swg-3x swg-jedistarfight " />
						</Typography>
					)}

					<Link style={{ textDecoration: "none", flex: 1 }} to="/">
						<Typography
							style={{
								padding: "1rem",
								marginTop: 10
							}}
							variant="body2"
							color="secondary"
						>
							<i className="swg swg-6x swg-starwars " />
						</Typography>
					</Link>
					<Typography
						style={{ flex: 1 }}
						variant="h5"
						color="secondary"
					>
						<b>{title}</b>
					</Typography>

					<ForceSwitch toggleTheme={toggleTheme} />
				</Toolbar>
			</AppBar>
		);
	}
}

export default Header;
