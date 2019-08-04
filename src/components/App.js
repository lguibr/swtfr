import React from "react";
import Header from "./header/Header";
import Main from "./main/Main";
import Loading from "./loading/Loading";

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
				<div className="App">
					<Header toggleTheme={toggleTheme} />
					<Main data={this.state.data} />
				</div>
			);
		}
	}

	componentDidMount() {
		// fetch("https://jsonplaceholder.typicode.com/posts/1")
		fetch("https://swapi.co/api/people//")
			.then(response => response.json())
			.then(data => this.setState({ data }));
	}
}

export default App;
