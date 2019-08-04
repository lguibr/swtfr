import React from "react";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import App from "./App";
import { CssBaseline } from "@material-ui/core";

const darkTheme = createMuiTheme({
	palette: {
		type: "dark",
		primary: {
			main: "#dd2c00"
		}
	}
});
const lightTheme = createMuiTheme({
	palette: {
		type: "light",
		primary: {
			main: "#0d47a1"
		}
	}
});

class ThemeContainer extends React.Component {
	state = {
		theme: lightTheme
	};

	togleTheme = () => {
		let theme;
		console.log(this.state.theme.palette.type);
		if (this.state.theme == darkTheme) {
			this.state.theme = lightTheme;
			console.log(this.state.theme.palette.type);

			theme = lightTheme;
		} else {
			this.state.theme = darkTheme;
			console.log(this.state.theme.palette.type);
			theme = darkTheme;
		}
		this.handleChangeTheme(theme);
	};
	handleChangeTheme = theme => this.setState({ theme });

	render() {
		return (
			<MuiThemeProvider theme={this.state.theme}>
				<CssBaseline />
				<App toggleTheme={this.togleTheme} />
			</MuiThemeProvider>
		);
	}
}

export default ThemeContainer;
