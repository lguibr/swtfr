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

	isMostlyNumber(string) {
		let countNumbers = 0;
		let mostlyNumber = false;
		for (let i = 0; i < string.length; i++) {
			let parsedString = parseFloat(string[i]);
			if (parsedString > 0 || parsedString < 0) {
				countNumbers++;
			}
			if (countNumbers > (string.length/2)) {
				mostlyNumber = true;
			}
		}
		console.warn(`contador de numeros ${countNumbers} é numero ? ${mostlyNumber}`);
		return mostlyNumber;
	}

	getTypeOfCard(propValue) {
		if (Array.isArray(propValue)) {
			return "array";
		} else if (this.isMostlyNumber(propValue)) {
			return "number";
		} else {
			return "string";
		}
	}

	render() {
		const { data } = this.props;
		Object.keys(data).map((e, i) => {
			console.log(data[e]);
			console.warn(this.getTypeOfCard(data[e]));
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
					return(
					<Grid key={i} xs={3} sm={6} item>
						<ModelCard key={i} propName={e} propValue={data[e]} />
					</Grid>)
				}
				)}
			</Grid>
		);
	}
}

export default Main;
