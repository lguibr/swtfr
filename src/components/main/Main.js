import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import PropCard from "./Propcard/PropCard";

const style = {
	Grid: {
		padding: 20
	}
};

export class Main extends Component {
	componentDidMount() {}
	render() {
		const teste = "data";
		const data = this.props.data;
		console.log(data);
		Object.keys(data).map((e, i) => console.log(e, i));
		return (
			<Grid container style={style.Grid}>
				{Object.keys(data).map((e, i) => (
					<Grid key={i} item sm>
						<PropCard key={i} propName={e} propValue={data[e]} />
					</Grid>
				))}
			</Grid>
		);
	}
}

export default Main;
