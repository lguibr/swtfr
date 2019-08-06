import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
	card: {
		textTransform: "capitalize",
		justifyContent: "space-between"
	},
	media: {
		height: "20vmin"
	}
});

const getModelIcon = propName => {
	let iconName;
	switch (propName) {
		case "planets":
			iconName = "swg-deathstar-4";
			break;
		case "people":
			iconName = "swg-hansolo";
			break;
		case "species":
			iconName = "swg-chewbacca";
			break;
		case "films":
			iconName = "swg-sw-alt-2";
			break;
		case "vehicles":
			iconName = "swg-atat-2";
			break;
		case "starships":
			iconName = "swg-falcon-3";
			break;
		default:
			iconName = "swg-yoda-2";
			break;
	}
	return iconName;
};

const ModelCard = props => {
	const classes = useStyles();
	const iconName = getModelIcon(props.propName);
	console.log(props.propValue);
	const pathLink = props.propValue.replace("https://swapi.co/api", "");
	
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
					<Link style={{ textDecoration: "none" }} to={pathLink}>
						<Typography
							color="textPrimary"
							variant="subtitle1"
							align="center"
						>
							<i className={"swg swg-x2  " + iconName} />
							{props.propName.replace("_", " ").toUpperCase()}
						</Typography>
					</Link>
				</CardContent>
			</CardActionArea>
		</Card>
	);
};

export default ModelCard;
