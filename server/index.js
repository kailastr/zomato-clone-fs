import express from "express";
import dotenv from "dotenv";
import passport from "passport";

//for private route authorization config
import privateRouteConfig from "./config/route.config";

//database connection
import ConnectDB from './database/connection';

//importing authentication page
import Auth from './api/auth';

dotenv.config();

const zomato = express();

//adding additional passport configuration
privateRouteConfig(passport);

zomato.use(express.json());

//passport initialization
zomato.use(passport.initialize());

zomato.get('/', (req, res) => {
    res.json({
        message: "Server is running.."
    });
});

// the url will be as "/auth/signup"
zomato.use('/auth', Auth);

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