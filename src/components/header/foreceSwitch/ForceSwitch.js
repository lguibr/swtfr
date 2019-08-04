import React from "react";
import Switch from "@material-ui/core/Switch";

export default function Switches(props) {
	console.log(props);
    const {toggleTheme} = props
	return (
		<div>
			<Switch
				onChange={toggleTheme}
				inputProps={{ "aria-label": "secondary checkbox" }}
			/>
		</div>
	);
}
