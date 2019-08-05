import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
	card: {
		maxHeight:"90%",
		maxWidth:"90%"
	},
	media: {
		height: 90
	}
});

const  PropCard = (props) => {
	
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
					<Typography variant="subtitle2" component="h2">
						{props.propName} : {props.propValue} 
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}

export default PropCard