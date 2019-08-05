import React, { Component } from "react";
import { Grid } from "@material-ui/core";
// import PropCard from "./propCard/PropCard";
import ModelCard from "./modelCard/ModelCard";

const style = {
	Grid: {
		maxWidth: "100%",
		margin:"auto"
	}
};
//  ModelCard Models
//  ElementsCard ElementModels
// 	PropCard ElementProps

const isMostlyNumber = (string)=>{
	let countNumber = 0 
	console.warn(string)
	for (let i = 0; i < string.length; i++) {
		const char = string[i];

		if(!isNaN(parseFloat(char))){
			countNumber =+ 1
		}
	}
	console.error(countNumber);

	return (countNumber>(string.length/2))
}

const getCardType = (propValue)=>{
	if(typeof(propValue) == "number"){
		return "is a number"
	}
	if(typeof(propValue) == "string" ){
		if (isMostlyNumber(propValue)) {
			return "é majoritariamente um numero";
		}
		return("é string")
	}else if (Array.isArray(propValue)){
		return("é array")
	} else {
		return ("ainda não identificado")
	}
}

export class Main extends Component {
	render() {
		const { data } = this.props;

		Object.keys(data).map((e, i) => {
			console.log(e,":" ,data[e] ,":" , i);
			console.error(getCardType(data[e]))
		});

		return (
			<Grid
				container
				wrap="wrap"
				style={style.Grid}
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
