import React from "react";
import Switch from "@material-ui/core/Switch";

export default function Switches(props) {
	console.log(props);
    const {toggleTheme} = props
	return (
		<div>
			<i className="swg swg-lg swg-reball " />

			<Switch
				onChange={toggleTheme}
				inputProps={{ "aria-label": "secondary checkbox" }}
			/>
			<i className="swg swg-lg swg-sithemp " />
		</div>
	);
}
