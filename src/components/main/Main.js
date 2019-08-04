import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import PropCard from "./propCard/PropCard";

const style = {
	Grid: {
		padding: 20
	}
};
export class Main extends Component {
	componentDidMount() {}
	render() {
		const { data } = this.props;
		console.log(data);
		Object.keys(data).map((e, i) => {


		});

		return (
			<Grid
				container
				wrap="wrap"
				justify={"space-between"}
				style={style.Grid}
				spacing={2}
			>
				{Object.keys(data).map((e, i) => (
					<Grid key={i} xs={3} sm={6} item>
						<PropCard
							key={i}
							propName={e}
							propValue={data[e]}
						/>
					</Grid>
				))}
			</Grid>
		);
	}
}

export default Main;
