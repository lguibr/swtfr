import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import PropCard from "./Propcard/PropCard";


const style = {
	Grid: { 
		padding: 20,
	}
};

export class Content extends Component {
	render() {
		return (
			<Grid container spacing={2} style={style.Grid}>
				<Grid item sm>
					<PropCard />
				</Grid>
				<Grid item sm>
					<PropCard />
				</Grid>
				<Grid item sm>
					<PropCard />
				</Grid>
			</Grid>
		);
	}
}

export default Content;
