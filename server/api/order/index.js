import express from 'express';
import passport from 'passport';

import { OrderModel } from '../../database/allModels';

const Router = express.Router();

/**
 * Route    /
 * Desc     Get order details using generateJwtToken function
 * Params   none
 * Access   Private
 * Method   GET
*/
Router.get(
    '/',
    passport.authenticate("jwt", { session: false }),
    async (req, res) => {
        try {
            const { user } = req; //we could get the user's details from the generateJwtToken function as user object

            const getOrders = await OrderModel.findOne({ user: user._id });
            console.log({ getOrders });
            if (!getOrders) {
                return res.status(404).json({ error: "User not found" });
            }

            return res.status(200).json({ orders: getOrders });

        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    });

export default Router;