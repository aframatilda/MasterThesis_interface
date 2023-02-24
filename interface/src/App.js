import './App.css';
import React, { useState } from 'react';

function App() {

    const [option, setOption] = useState(0);
    const [apiResponse, setApiResponse] = useState("");

    const callAPI = () => {
        fetch("http://localhost:9000/testAPI")
            .then(res => res.text())
            .then(res => setApiResponse(apiResponse));
    }

    const componentWillMount = () => {
        callAPI();
    }


    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents page from doing a refresh
        console.log(option);
    }
    
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

export default App;
