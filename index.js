const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./routes');
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

/*DB Connection using moongoose*/

// Or using promises
mongoose.connect('mongodb://admin:admin@ds237707.mlab.com:37707/orp-todo', { useMongoClient: true }, function (err) {
  if (err) {
    console.log('###Something went wrong while establishing connection with the database ###: ', err)
  } else {
    console.log('***Successful establishment of connection with the database***')
  }
});

/*Set port to 3000*/
app.listen('1337', function () {
  console.log('Listening to port 1337...');
});

/*Define routes to handle all incoming routes*/
routes(app);
