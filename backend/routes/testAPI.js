var express = require("express");
var router = express.Router();
//import {execFile,exec, parse_response} from ('child_process');

const options = [];

router.post('/', (req, res) => {
    const option = (req.body.option);
    options.push(option);
});

router.get('/', (req, res) => {
    res.json(options);
    //res.json({ message: 'HEJ' });
});


app.get("/", function (req, res) {
    request(options, function (err, response, body) {
        var json = JSON.parse(body);
        console.log(json); // Logging the output within the request function
        res.json(request.json) //then returning the response.. The request.json is empty over here
    }); //closing the request function      
});

/*
router.get('/', (req, res) => {

    exec('C:/Users/Victoria/Documents/GitHub/MasterThesis/bin/Release/CameraSDKTest.exe', ["option"],
        function (error, stdout, stderr) => {

        var actions = parse_response(response)
        for action in actions {
            exec("./camera_app $action outputfile",
                (error, stdout, stderr) => {
                    https.post("server.com/api/send_image/cameraid", outputfile)
                }}

    if (error) {
            throw error;
        }
        console.log(stdout);
    });

});



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


module.exports = router;