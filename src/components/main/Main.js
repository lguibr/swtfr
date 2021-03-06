import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import PropCard from "./propCard/PropCard";
import ModelCard from "./modelCard/ModelCard";
import ListCard from "./listCard/ListCard";

const style = {
	Grid: {
		maxWidth: "100%",
		padding: "40px 30px"
	}
};

export class Main extends Component {
	isUrl(string) {
		const http = "http";
		return string.match(http);
	}

	isMostlyNumber(string) {
		let countNumber = 0;
		console.warn(string);
		for (let i = 0; i < string.length; i++) {
			const char = string[i];

			if (!isNaN(parseFloat(char))) {
				countNumber = +1;
			}
		}
		return countNumber > string.length / 2;
	}

	getCardType(propValue) {
		if (typeof propValue == "number") {
			return "number";
		} else if (typeof propValue == "string") {
			if (this.isMostlyNumber(propValue)) {
				return "mostlyNumber";
			} else if (this.isUrl(propValue)) {
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
	}

	render() {
		const { data } = this.props;
		Object.keys(data).map((e, i) => {
			console.log(e, ":", data[e], ":", i);
		});

		return (
			<Grid container wrap="wrap" style={style.Grid} spacing={2}>
				{Object.keys(data).map((e, i) => {
					const cardType = this.getCardType(data[e]);

					if (cardType == "null") {
						return null;
					} else if (
						cardType == "string" ||
						cardType == "number" ||
						cardType == "mostlyNumber"
					) {
						if (e != "count") {
							return (
								<Grid key={i} xs={12} sm={6} md={4} item>
									<PropCard
										key={i}
										propName={e}
										propValue={data[e]}
									/>
								</Grid>
							);
						}
					} else if (cardType == "url" && e != "url") {
						return (
							<Grid key={i} xs={12} sm={6} md={4} style={e=="next" || e=="prev" ? {order : i+11} :{order:i}}  item>
								<ModelCard
									history={this.props.history}
									key={i}
									propName={e}
									propValue={data[e]}
								/>
							</Grid>
						);
					} else if (cardType == "object") {
						return (
							<Grid key={i} xs={12} sm={6} md={4} item>
								<ModelCard
									history={this.props.history}
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
							console.log(arrayProp);
							if (arrayProp.length > 0)
								return (
									<Grid key={i} xs={12} sm={6} md={4} item>
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
										<Grid
											key={i}
											xs={12}
											sm={6}
											md={4}
											item
										>
											<ModelCard
												history={this.props.history}
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
