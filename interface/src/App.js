import './App.css';
import React, { useState, Component } from 'react';

class App extends Component{

    constructor(props){
        super(props);
        this.state = { apiResponse: "" };
        this.state = { option: 0 };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    callAPI() {
        fetch("http://localhost:9000/testAPI")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }));
    }

    componentWillMount() {
        this.callAPI();
    }
    
    handleChange(e) {
        this.setState({ option: e.target.value });
    }

    handleSubmit(e) {
        console.log(this.state.option);
        fetch('https://localhost:9000/testAPI', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state.option),
        })

        e.preventDefault();
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Please enter option:
                            <input id="number" type="number" value={this.state.option} onChange={this.handleChange} />
                        </label>
                        <input type="submit" value="Submit" />
                    </form>
                    <p> {this.state.apiResponse}</p>
                    <ol>
                        <li> Take photo </li>
                        <li> Get file list (video and photo) </li>
                        <li> Delete file </li>
                        <li> Download file </li>
                        <li> Set exposure settings </li>
                        <li> Set capture settings </li>
                        <li> Take photo and download </li>
                        <li> Stitch image and download </li>
                        <li> Get current capture status </li>
                        <li> Start timelapse  </li>
                        <li> Stop timelapse  </li>
                        <li> Get battery status  </li>
                        <li> Get storage info  </li>
                    </ol>
                </header>
            </div>
        );
    }
}

export default App;
