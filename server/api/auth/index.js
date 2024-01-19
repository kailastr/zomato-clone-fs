import express from 'express';

import { UserModel } from "../../database/allModels";
import { ValidateSignIn, ValidateSignup } from '../../validation/auth.validation';

import passport from 'passport';

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

Router.get('/google', passport.authenticate("google", {
    scope: [
        "https://www.googleapis.com/auth/userinfo.profile",
        "https://www.googleapis.com/auth/userinfo.email"
    ]
}));


Router.get(
    '/google/callback',
    passport.authenticate("google", { failureRedirect: '/' }), //callback function to redirect when the google authentication fails 
    (req, res) => { //when the user authenticaiton succeeded the following fn works


        // return res.status(200).json({ //we dont need to return the token instead we need to pass the token into the frontend part as the below return fn
        //     token: req.session.passport.user.token 
        // })

        return res.redirect(`http://localhost:3000/google/${req.session.passport.user.token}`) //this is the url for the frontend
    }
);

export default Router;