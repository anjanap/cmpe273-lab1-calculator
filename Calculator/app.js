
var express = require('express')
  , routes = require('./routes')
  , calculate = require('./routes/calculate')
  , http = require('http')
  , path = require('path');
var cors = require('cors');

var bodyParser = require('body-parser');

var app = express();
app.use(cors());

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/calculate',calculate);

app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use(function (err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    console.log(err);
    res.status(err.status || 500);
    res.json('error');
});

module.exports = app;


