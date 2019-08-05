import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { HashRouter, Route, Link } from "react-router-dom";

const useStyles = makeStyles({
	card: {
		maxHeight: "90%",
		maxWidth: "90%",
		textTransform: "capitalize"
	},
	media: {
		height: 90
	}
});

const PropCard = props => {
	const classes = useStyles();
	return (
		<Card className={classes.card}>
			<CardActionArea
				onClick={() => {
					console.log(props.propValue);
				}}
			>
				<CardMedia
					className={classes.media}
					image="https://i.imgur.com/XZ5KpIV.jpg"
					title="Titulo Da Imagem"
				/>
				<CardContent>

						<Typography
							color="textPrimary"
							variant="subtitle1"
							align="center"
						>
							{props.propName} : {props.propValue}
						</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
};

export default PropCard;
