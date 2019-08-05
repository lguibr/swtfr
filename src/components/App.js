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

		if (!this.state.data) {
			return <Loading />;
		} else {
			return (
				<HashRouter basename="/">
					<div className="App">
						<Header toggleTheme={toggleTheme} />

						<Route
							path="/"
							component={() => (
								<Main
									history={history}
									data={this.state.data}
								/>
							)}
						/>
					</div>
				</HashRouter>
			);
		}
	}

	// path="/:a([A-Za-z]+)"

	fetchData(path = "/") {
		const baseUrl = "https://swapi.co/api";
		fetch(`${baseUrl}${path}`)
			.then(response => response.json())
			.then(data => this.setState({ data }));
	}

	componentDidMount() {
		const history = createHashHistory({
			basename: "",
			hashType: "slash"
		});

		this.setState({ history });

		history.listen(e => {
			console.error("listen", e.pathname);
			this.fetchData(e.pathname);
		});

		this.fetchData(history.location.pathname);
	}
}

export default App;
