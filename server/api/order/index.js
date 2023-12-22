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


/**
 * Route    /new
 * Desc     Add new order to the orders array
 * Para     none
 * Access   Private
 * Method   PUT
 */
Router.put('/new', passport.authenticate("jwt", { session: false }), async (req, res) => {
    try {
        const { user } = req;

        const { orderDetails } = req.body;
        //task: validate orderDetails using joi
        const addNewOrder = await OrderModel.findOneAndUpdate(
            {
                //this object says that we should have to update the user having this specific id
                user: user._id
            },
            {
                //since we are updating an array of OrderDetails we need to push new order to the array as below
                $push: {
                    orderDetails: orderDetails
                }
            },
            {
                //this object is used to return the new updated array
                new: true
            }
        );

        return res.status(200).json({ order: addNewOrder });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

export default Router;