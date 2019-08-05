import React from "react";
import { HashRouter, Route, Link } from "react-router-dom";
import Header from "./header/Header";
import Main from "./main/Main";
import Loading from "./loading/Loading";
import { createHashHistory } from "history";

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};

		this.onChange = this.onChange.bind(this);
	}

	onChange(event) {
		this.setState({ value: event.target.value });
	}

	render() {
		const { toggleTheme } = this.props;
		const history = createHashHistory({
			basename: "",
			hashType: "slash"
		});
		const location = history.location;

		console.log(history);
		console.log(location);
		console.log(location.hash);

		if (!this.state.data) {
			return <Loading />;
		} else {
			return (
				<HashRouter basename="/">
					<div className="App">
						<Header toggleTheme={toggleTheme} />

						<Route
							exact
							path="/"
							component={() => <Main data={this.state.data} />}
						/>
					</div>
				</HashRouter>
			);
		}
	}

	componentDidMount() {
		fetch("https://swapi.co/api/")
			.then(response => response.json())
			.then(data => this.setState({ data }));
	}
}

export default App;
