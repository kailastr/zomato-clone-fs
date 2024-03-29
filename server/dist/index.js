"use strict";

var _express = _interopRequireDefault(require("express"));
var _dotenv = _interopRequireDefault(require("dotenv"));
var _passport = _interopRequireDefault(require("passport"));
var _expressSession = _interopRequireDefault(require("express-session"));
var _cors = _interopRequireDefault(require("cors"));
var _helmet = _interopRequireDefault(require("helmet"));
var _route = _interopRequireDefault(require("./config/route.config"));
var _google = _interopRequireDefault(require("./config/google.config"));
var _connection = _interopRequireDefault(require("./database/connection"));
var _auth = _interopRequireDefault(require("./api/auth"));
var _food = _interopRequireDefault(require("./api/food"));
var _restaurant = _interopRequireDefault(require("./api/restaurant"));
var _user = _interopRequireDefault(require("./api/user"));
var _menu = _interopRequireDefault(require("./api/menu"));
var _order = _interopRequireDefault(require("./api/order"));
var _review = _interopRequireDefault(require("./api/review"));
var _image = _interopRequireDefault(require("./api/image"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//to connect with frontend

//for private route authorization config

//database connection

//importing authentication page

// importing other routes

_dotenv.default.config();
const zomato = (0, _express.default)();
zomato.use((0, _expressSession.default)({
  secret: process.env.JWTSECRET
}));

//adding additional passport configuration
(0, _route.default)(_passport.default);
(0, _google.default)(_passport.default);
zomato.use((0, _cors.default)({
  origin: "http://localhost:3000"
}));
zomato.use((0, _helmet.default)());
zomato.use(_express.default.json());

//passport initialization
zomato.use(_passport.default.initialize());
zomato.use(_passport.default.session());
zomato.get('/', (req, res) => {
  res.json({
    message: "Server is running.."
  });
});

// the url will be as "/auth/signup"
zomato.use('/auth', _auth.default);
zomato.use('/food', _food.default);
zomato.use('/restaurant', _restaurant.default);
zomato.use('/user', _user.default);
zomato.use('/menu', _menu.default);
zomato.use('/order', _order.default);
zomato.use('/review', _review.default);
zomato.use('/image', _image.default);
const PORT = 4000;
zomato.listen(PORT, () => {
  (0, _connection.default)().then(() => {
    //if DB connection succeeded
    console.log("Server is running !!");
  }).catch(error => {
    //if some error occured in DB connection
    console.log("Server is running, but database connection failed !! \n");
    console.log(error);
  });

  //console.log("Server is running !!");
});