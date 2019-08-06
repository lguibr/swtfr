import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import PropCard from "./propCard/PropCard";
import ModelCard from "./modelCard/ModelCard";
import ListCard from "./listCard/ListCard";

const style = {
	Grid: {
		maxWidth: "100%",
		margin: "auto"
	}
};
//  ModelCard Models
//  ElementsCard ElementModels
// 	PropCard ElementProps

const isUrl = string => {
	const http = "http";
	return string.match(http);
};

const isMostlyNumber = string => {
	let countNumber = 0;
	console.warn(string);
	for (let i = 0; i < string.length; i++) {
		const char = string[i];

		if (!isNaN(parseFloat(char))) {
			countNumber = +1;
		}
	}
	return countNumber > string.length / 2;
};

const getCardType = propValue => {
	if (typeof propValue == "number") {
		return "number";
	} else if (typeof propValue == "string") {
		if (isMostlyNumber(propValue)) {
			return "mostlyNumber";
		} else if (isUrl(propValue)) {
			return "url";
		} else {
			return "string";
		}
	} else if (Array.isArray(propValue)) {
		return "array";
	} else if (typeof propValue == "object") {
		if (propValue == null) {
			return "null";
		} else {
			return "object";
		}
	} else {
		return "undefined";
	}
};

export class Main extends Component {
	render() {
		const { data } = this.props;
		Object.keys(data).map((e, i) => {
			console.log(e, ":", data[e], ":", i);
		});

		return (
			<Grid container wrap="wrap" style={style.Grid} spacing={2}>
				{Object.keys(data).map((e, i) => {
					const cardType = getCardType(data[e]);

					if (cardType == "null") {
						return null;
					} else if (
						cardType == "string" ||
						cardType == "number" ||
						cardType == "mostlyNumber"
					) {
						return (
							<Grid key={i} xs={6} sm={4} md={3} item>
								<PropCard
									key={i}
									propName={e}
									propValue={data[e]}
								/>
							</Grid>
						);
					} else if (cardType == "url") {
						return (
							<Grid key={i} xs={6} sm={4} md={3} item>
								<ModelCard
									key={i}
									propName={e}
									propValue={data[e]}
								/>
							</Grid>
						);
					} else if (cardType == "object") {
						return (
							<Grid key={i} xs={6} sm={4} md={3} item>
								<ModelCard
									key={i}
									propName={e}
									propValue={data[e]}
								/>
							</Grid>
						);
					} else if (cardType == "array") {
						const arrayProp = data[e];
						if (
							e == "people" ||
							e == "planets" ||
							e == "films" ||
							e == "species" ||
							e == "vehicles" ||
							e == "starships"
						) {
							console.log("listCard1!");
							return (
								<Grid key={i} xs={6} sm={4} md={3} item>
									<ListCard
										key={i}
										propName={e}
										propValue={arrayProp}
									/>
								</Grid>
							);
						} else {
							return arrayProp.map((ele, i) => {
								if (
									(ele.name && ele.url) ||
									(ele.title && ele.url)
								) {
									return (
										<Grid key={i} xs={6} sm={4} md={3} item>
											<ModelCard
												key={i}
												propName={
													ele.name
														? ele.name
														: ele.name
												}
												propValue={ele.url}
											/>
										</Grid>
									);
								}
							});
						}
					} else {
						console.error("erro");
					}
				})}
			</Grid>
		);
	}
}

export default Main;
