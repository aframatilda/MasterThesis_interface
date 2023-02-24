import './App.css';
import React, { useState, Component } from 'react';
import axios from "axios";

class App extends Component{

    constructor(props){
        super(props);
        this.state = { apiResponse: "" };
    }

    callAPI() {
        fetch("http://localhost:9000/testAPI")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }));
    }

    componentWillMount() {
        this.callAPI();
    }

    handleSubmit = (e) => {
        e.preventDefault(); // Prevents page from doing a refresh
        console.log(option);
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <form onSubmit={handleSubmit}>
                        <label>
                            Please enter option:
                            <input id="number" type="number" value={option} onChange={(e) => setOption(e.target.value)} />
                        </label>
                        <input type="submit" value="Submit" />
                    </form>

                    <h1>{apiResponse}</h1>
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
