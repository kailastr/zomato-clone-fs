import express from 'express';
import passport from 'passport';
import { UserModel } from '../../database/allModels'
import { get } from 'mongoose';

const Router = express.Router();

/**
 * Route    /
 * Desc     Get Authorized user details
 * Params   none
 * Access   Private
 * Method   GET
 */
Router.get('/', passport.authenticate('jwt', { session: false }), async (req, res) => {
    try {
        const { email, fullName, phoneNumber, address } = req.user;

        return res.json({
            user: { email, fullName, phoneNumber, address }
        });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/**
 * Route    /:_id
 * Desc     Get user details for the review section
 * Params   _id
 * Access   Public
 * Method   GET
 */
Router.get('/:_id', async (req, res) => {
    try {
        const { _id } = req.params;

        const getUser = await UserModel.findById(_id);

        if (!getUser) {
            return res.status(404).json({ error: "User not found !!" });
        }

        const { fullName } = getUser;
        return res.json({ user: { fullName } });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/**
 * Route    /:_id
 * Desc     Update a user details
 * Params   _id
 * Access   Private
 * Method   PUT
 */
//HomeWork to create its frontend
Router.put('/update/:_id', passport.authenticate('jwt', { session: false }), async (req, res) => {
    try {
        const { _id } = req.params;
        const { userData } = req.body;

        const updateUserData = await UserModel.findByIdAndUpdate(
            _id,
            {
                $set: userData
            },
            {
                new: true
            }
        );

        return res.status(200).json({ user: updateUserData });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

export default Router;