import express from 'express';

import { UserModel } from "../../database/allModels";
import { ValidateSignIn, ValidateSignup } from '../../validation/auth.validation';

const Router = express.Router();

Router.post('/signup', async (req, res) => {
    try {

        //to get the joi validation
        await ValidateSignup(req.body.credentials);

        await UserModel.findByEmailAndPhone(req.body.credentials);

        const newUser = await UserModel.create(req.body.credentials);
        const token = newUser.generateJwtToken();

        return res.status(200).json({ token, status: "success" });
    }
    catch (error) {
        // console.log("error is", error);
        return res.status(500).json({ error: error.message });
    }
});

Router.post('/signin', async (req, res) => {
    try {
        //joi validation for signIn
        await ValidateSignIn(req.body.credentials);

        const user = await UserModel.findByEmailAndPassword(req.body.credentials);
        const token = user.generateJwtToken();

        return res.status(200).json({ token, status: "success" });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

export default Router;