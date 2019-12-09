// var bodyParser = require('body-parser')
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const dbURL = "mongodb+srv://quentin:mulliez@dashboardproject-jipvm.mongodb.net/DashboardProject?retryWrites=true&w=majority";
// on se connecte à la base de données
mongoose.connect(dbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true 
    });

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const userRouter = require('./routes/user');
const sensorRouter = require('./routes/sensor');
const sensorsRouter = require('./routes/sensors');
const measureRouter = require('./routes/measure');
const measuresRouter = require('./routes/measures');


var app = express();

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
      res.sendStatus(200);
    } else {
      next();
    }
  });
  
app.use(logger("dev"));
// app.use(bodyParser.json()); // <--- Here
// app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use("/", indexRouter);
app.use('/user', userRouter);
app.use("/users", usersRouter);
app.use("/measure", measureRouter);
app.use("/measures", measuresRouter);
app.use("/sensor", sensorRouter);
app.use("/sensors", sensorsRouter);

module.exports = app;
