import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
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

const ListCard = props => {
	const classes = useStyles();
	const [titles, setTitles] = useState([]);
	console.log(props.propValue);

	const getTitle = url => fetch(`${url}`).then(response => response.json());

	useEffect(() => {
		const titlePromiseList = props.propValue.map(getTitle);
		Promise.all(titlePromiseList).then(setTitles);
	}, []);

	return (
		<Card className={classes.card}>
			<CardActionArea onClick={() => {}}>
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
						{props.propName.replace("_", " ").toUpperCase()} :{" "}
						{titles.map(title => (
							<Link
								style={{ textDecoration: "none" }}
								to={{
									pathname: title.url.replace(
										"https://swapi.co/api",
										""
									)
								}}
								replace={true}
								key={title.url}
							>
								<Typography
									color="textPrimary"
									variant="subtitle1"
									align="center"
								>
									{title.title || title.name}
								</Typography>
							</Link>
						))}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
};

export default ListCard;
