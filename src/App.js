import React from 'react'

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: ''
        }
    }

    handleButtonClickEvent = () => {
        this.setState(
            { name: 'Eko wahyu ' }
        )
    }

    render() {
        return (
            <div>
                <h1>This is my react Component</h1>
                <button onClick={this.handleButtonClickEvent}> CLick Me </button>
                { this.state.name && <p>{ this.state.name }</p>}
            </div>
        );
    }
}

export default App