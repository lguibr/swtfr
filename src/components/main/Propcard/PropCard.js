import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
	card: {
        maxWidth : "100%"
	},
	media: {
		height: 140
	}
});

export default function PropCard() {
	const classes = useStyles();

	return (
		<Card className={classes.card}>
			<CardActionArea>
				<CardMedia
					className={classes.media}
					image="https://i.imgur.com/XZ5KpIV.jpg"
					title="Titulo Da Imagem"
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="h2">
						elementModelProp: Value(50)
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}
