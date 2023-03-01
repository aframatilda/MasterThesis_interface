import './App.css';
import React, { useState } from "react";

function App() {

    const [option, setOption] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:9000/testAPI", {
            method: 'post',
            body: JSON.stringify({
                option: option
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(JSON.parse(option)) // It parses the output
            .catch(function (error) {
                console.log("error---", error)
            })
            .then(setOption([]))
    }


    router.get('/' res => {
        var actions = parse_response(res)
        for action in actions {
            exec("./camera_app $action outputfile", (error, stdout, stderr) =>
            { router.post("server.com/api/send_image/cameraid", outputfile) }  }



    return (
        <div className="App">
            <header className="App-header">
                <form onSubmit={handleSubmit}>
                    <label>
                        Please enter option:
                        <input id="number" type="number" value={option} name="option" onChange={(e) => setOption(e.target.value)} />
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