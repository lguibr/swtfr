import React from 'react';
import Header from './header/Header';
import Main from './main/Main';

import Button from '@material-ui/core/Button';

class App extends React.Component {
  constructor (props) {
    super(props)

		this.state = {
    }

		this.onChange = this.onChange.bind(this)
	}

  onChange (event) {
    this.setState({ value: event.target.value })
	}

  render () {
    return (
      <div className="App">
        <Header />
        <Main />
        <Button
          onClick={() => {
            (this.props.toggleTheme())
          }}
          variant="contained"
        >
						Default
        </Button>
      </div>
    )
	}

  componentDidMount () {
    fetch('https://swapi.co/api/')
      .then(response => response.json())
      .then(data => this.setState({ data }))
	}
}

export default App
