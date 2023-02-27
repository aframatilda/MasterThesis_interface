const express = require('express');
const logger = require('morgan');
const cors = require('cors');

const app = express();

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,            
}
app.use(cors(corsOptions));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let options = [];

app.get('/', function(req, res) {
  console.log('Ins');
  res.writeHead(200, {
    'Content-Type': 'application/json',
  });
    console.log('Options : ', JSON.stringify(options));
    res.end(JSON.stringify(options));
});

app.post('/', function(req, res) {
  const newOption = {
    OptionID: req.body.optionID,
  };

    options.push(newOption);
    console.log(options);
});

//start your server on port 3001
app.listen(3001, () => {
  console.log('Server Listening on port 3001');
});


module.exports = app;
