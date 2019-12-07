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
    });

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const userRouter = require('./routes/user');
const sensorRouter = require('./routes/sensor');
const sensorsRouter = require('./routes/sensors');
const measureRouter = require('./routes/measure');
const measuresRouter = require('./routes/measures');
const askMeRouter = require('./routes/askMe');


var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use("/", indexRouter);
app.use('/user', userRouter);
app.use("/users", usersRouter);
app.use("/measure", measureRouter);
app.use("/measures", measuresRouter);
app.use("/sensor", sensorRouter);
app.use("/sensors", sensorsRouter);
app.use("/askMe", askMeRouter);

module.exports = app;
