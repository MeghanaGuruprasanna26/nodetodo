var express = require('express');
var app = express();
var mongoose = require('mongoose');
var config = require('./config');
var setupController = require('./controllers/setupController');
var apiController = require('./controllers/apiController');

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');
mongoose.Promise = global.Promise;
mongoose.connect(config.getDbConnectionString(), {useMongoClient: true});
setupController(app);
apiController(app);

// Start our server
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

export default app;