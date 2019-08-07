import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { HashRouter, Route, Link } from "react-router-dom";

const useStyles = makeStyles({
	card: {
		textTransform: "capitalize",
		justifyContent: "space-between"
	},
	media: {
		height: "20vmin"
	}
});

const PropCard = props => {
	const classes = useStyles();
	return (
		<Card className={classes.card}>
			<CardMedia
				className={classes.media}
				image="https://karacasanime.com/wp-content/uploads/2019/05/Disney-Star-Wars-Karacas-Anime-398x200.jpg"
				title="Titulo Da Imagem"
			/>
			<CardContent>
				<Typography
					color="textPrimary"
					variant="subtitle1"
					align="center"
				>
					<b>
						{props.propName.replace("_", " ").toUpperCase()} :
					</b>{" "}
					{props.propValue}
				</Typography>
			</CardContent>
		</Card>
	);
};

export default PropCard;
