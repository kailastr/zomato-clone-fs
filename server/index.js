import express from "express";
import dotenv from "dotenv";
import passport from "passport";
import session from "express-session";

//for private route authorization config
import privateRouteConfig from "./config/route.config";
import googleAuthConfig from "./config/google.config";

//database connection
import ConnectDB from './database/connection';

//importing authentication page
import Auth from './api/auth';
// importing other routes
import Food from './api/food';
import Restaurant from './api/restaurant';
import User from './api/user';
import Menu from './api/menu';
import Order from './api/order';
import Review from './api/review';
import Image from './api/image';

dotenv.config();

const zomato = express();
zomato.use(session({ secret: process.env.JWTSECRET }));

//adding additional passport configuration
privateRouteConfig(passport);
googleAuthConfig(passport);

zomato.use(express.json());

//passport initialization
zomato.use(passport.initialize());

zomato.use(passport.session());

zomato.get('/', (req, res) => {
    res.json({
        message: "Server is running.."
    });
});

// the url will be as "/auth/signup"
zomato.use('/auth', Auth);

zomato.use('/food', Food);
zomato.use('/restaurant', Restaurant);
zomato.use('/user', User);
zomato.use('/menu', Menu);
zomato.use('/order', Order);
zomato.use('/review', Review);
zomato.use('/image', Image);

const PORT = 4000;

zomato.listen(PORT, () => {
    ConnectDB()
        .then(() => { //if DB connection succeeded
            console.log("Server is running !!");
        })
        .catch((error) => { //if some error occured in DB connection
            console.log("Server is running, but database connection failed !! \n");
            console.log(error);
        })

    //console.log("Server is running !!");
});