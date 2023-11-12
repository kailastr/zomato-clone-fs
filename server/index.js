import express from "express";
import dotenv from "dotenv";

//database connection
import ConnectDB from './database/connection';

dotenv.config();

const zomato = express();

zomato.use(express.json());

zomato.get('/', (req, res) => {
    res.json({
        message: "Server is running.."
    });
});

const PORT = 4000;

zomato.listen(PORT, () => {
    // ConnectDB()
    //     .then(() => { //if DB connection succeeded
    //         console.log("Server is running !!");
    //     })
    //     .catch((error) => { //if some error occured in DB connection
    //         console.log("Server is running, but database connection failed !! \n");
    //         console.log(error);
    //     })

    console.log("Server is running !!");
});