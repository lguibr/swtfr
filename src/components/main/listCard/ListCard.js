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

const getTitle = path => {
	const baseUrl = "https://swapi.co/api";
	let title
	fetch(`${baseUrl}${path}`)
		.then(response => response.json())
		.then(data => {
			title = data.title ? data.title : data.name;
			console.log(title);
			return title;
		});
		return title;
};

const ListCard = props => {
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
						{props.propName}

						{props.propValue.map((e, i) => {
							console.error(e);
							const pathLink = e.replace("https://swapi.co/api","")
							
							return (
								<Typography
									key={i}
									color="textPrimary"
									variant="body1"
									align="center"
								>
									<br />
									<Link style={{ textDecoration: "none" }} to={pathLink}>
									{console.log(getTitle(pathLink))}
									{e}
									</Link>
								</Typography>
							);
						})}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
};

export default ListCard;
