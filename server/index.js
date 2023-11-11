import express from "express";

const zomato = express();

zomato.use(express.json());

zomato.get('/', (req, res) => {
    res.json({
        message: "Server is running.."
    });
});

const PORT = 4000;

zomato.listen(PORT, () => {
    console.log("Server is running !!");
});