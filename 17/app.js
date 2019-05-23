var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');

var topRouter = require('./routes/top');
var leftRouter = require('./routes/left');
var rightRouter = require('./routes/right');

var boardListRouter = require('./routes/boardList');
var cuisineListRouter = require('./routes/cuisineList');
var foodListRouter = require('./routes/foodList');

var saveBoardRouter = require('./routes/saveBoard');
var saveCuisineRouter = require('./routes/saveCuisine');
var saveFoodRouter = require('./routes/saveFood');

var addCuisineRouter = require('./routes/addCuisine');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', indexRouter);

app.use('/top', topRouter);
app.use('/left', leftRouter);
app.use('/right', rightRouter);
app.use('/boardList', boardListRouter);
app.use('/cuisineList', cuisineListRouter);
app.use('/foodList', foodListRouter);
app.use('/saveBoard', saveBoardRouter);
app.use('/saveCuisine', saveCuisineRouter);
app.use('/saveFood', saveFoodRouter);

app.use('/addCuisine', addCuisineRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
