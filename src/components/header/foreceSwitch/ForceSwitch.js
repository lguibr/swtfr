import React from "react";
import Switch from "@material-ui/core/Switch";
import { Typography } from "@material-ui/core";

export default function Switches(props) {
	const { toggleTheme } = props;
	return (
		<div>
			<Typography variant="inherit" color="secondary">
				<i className="swg swg-lg swg-reball " />

				<Switch
					onChange={toggleTheme}
					inputProps={{ "aria-label": "secondary checkbox" }}
				/>
				<i className="swg swg-lg swg-sithemp " />
			</Typography>
		</div>
	);
}
