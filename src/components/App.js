import React from "react";
import Header from "./header/Header";
import Main from "./main/Main";
import { MuiThemeProvider ,createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
	palette: {
		primary: {
			main: "#1a237e"
		},
		secondary: {
			main: "#7986cb"
		}
	}
});



function App() {
	return (
		<MuiThemeProvider theme={theme}>
			<div className="App">
				<Header />
				<Main />
			</div>
		</MuiThemeProvider>
	);
}

export default App;

