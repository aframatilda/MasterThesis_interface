import './App.css';
import React, { useState } from "react";
//import { exec } from "child_process";
   //const { exec } = require('child_process');

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
    

 /*
    // Counts the number of directory in 
    // current working directory
    exec('C:/Users/Victoria/Documents/GitHub/MasterThesis/bin/Release/CameraSDKTest.exe', (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return;
        }
        console.log(`stdout: No. of directories = ${stdout}`);
        if (stderr != "")
            console.error(`stderr: ${stderr}`);
    });
*/

    /*
  
    execFile('C:/Users/Victoria/Documents/GitHub/MasterThesis/bin/Release/CameraSDKTest.exe',
        [], (error, stdout, stderr) => {
        if (error) {
            throw error;
        }
        console.log(stdout);
    });

    
    function main() {
        https.get("server.com/api/get_actions" response => {
            var actions = parse_response(response)
            for action in actions {
                exec("./camera_app $action outputfile",
                    (error, stdout, stderr) => {
          https.post("server.com/api/send_image/cameraid", outputfile)
           }}
    */

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