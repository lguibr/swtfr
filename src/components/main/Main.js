import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import PropCard from "./propCard/PropCard";
import ModelCard from "./modelCard/ModelCard";

const style = {
	Grid: {
		maxWidth: "100%",
		padding: "2em"
	}
};
export class Main extends Component {
	render() {
		const { data } = this.props;

		Object.keys(data).map((e, i) => {
			// console.log(data[e]);
		});

		return (
			<Grid
				container
				wrap="wrap"
				style={style.Grid}
				justify="space-between"
				spacing={2}
			>
				{Object.keys(data).map((e, i) => {
					return (
						<Grid key={i} xs={6} sm={4} md={3} item>
							<ModelCard
								key={i}
								propName={e}
								propValue={data[e]}
							/>
						</Grid>
					);
				})}
			</Grid>
		);
	}
}

export default Main;
