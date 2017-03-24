// Project Server JS___

console.log('starting Discusstion Board Server!!');

var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var path = require('path');
var root = __dirname;
var port = process.env.Port || 8000;
var app = express();

// // Session configuration

var sessionConfig = {
    secret:'MEANKrakenSecretKey',
    resave:false,
    saveUninitialized: true,
    name:'MEAN_DBoard_Cookie',
    cookie: {
      secure: false,
      httpOnly:false,
      maxAge: 360000000
  }
}

app.use(session({secret: 'LooseLipsSinkShips'}));

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(path.join(root, 'client')));
app.use(express.static(path.join(root, 'bower_components')));


// the stuff above is manditory in placement!!!!!

// Require mongoose before routes!!!!!!

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);


app.listen(port, function(){
  console.log('the server is running on ${port}.')
});
