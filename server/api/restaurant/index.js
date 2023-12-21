import express from 'express';

import { RestaurantModel } from '../../database/allModels'

const Router = express.Router();

/**
 * Route    /createRestaurant
 * Desc     Create new Restaurant
 * Params   none
 * Access   Public
 * Method   POST
 */
//HomeWork
Router.post('/createRestaurant', async (req, res) => {
    try {
        const newRestaurant = RestaurantModel.create(req.body.RestaurantDetails);

        return res.status(200).json({ status: "successfully added new Restaurant" });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/**
 * Route    /
 * Desc     Get all the restaurants details based on the city
 * Params   none
 * Access   Public
 * Method   GET
 */
Router.get('/', async (req, res) => {
    try {
        //http://localhost:4000/restaurant/?city=Kochi
        //instead of passing values in parameters we could also pass values as quries as above to get values from this quries we could do as below
        const { city } = req.query;
        const restaurants = await RestaurantModel.find({ city });

        if (restaurants.length === 0) {
            return res.json({ error: 'No restaurants found in this city!!' });
        }

        return res.json({ restaurants });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});


/**
 * Route    /:_id
 * Desc     Get individual restaurant details based on id
 * Params   _id
 * Access   Public
 * Method   GET
 */
Router.get('/:_id', async (req, res) => {
    try {
        const { _id } = req.params;
        const restaurant = await RestaurantModel.findById(_id);

        if (!restaurant) {
            return res.status(400).json({ error: 'Restaurant not found with this id!!' });
        }

        return res.json({ restaurant });

    } catch (error) {
        return res.json({ error: error.message });
    }
});

/**
 * Route    /search/:searchString
 * Desc     Get Restaurant based on Search
 * Params   searchString
 * Access   Public
 * Method   GET
 */
Router.get('/search/:searchString', async (req, res) => {
    //if we are searching for Raj then we should have to get every hotel contains Raj in them like RajHotel, RamrajHotel, HotelRajenthra ...
    try {
        const { searchString } = req.params;
        const restaurants = await RestaurantModel.find({
            name: { $regex: searchString, $options: 'i' }
        });

        if (restaurants.length === 0) {
            return res.status(404).json({ error: `Restaurants not found in ${searchString}` });
        }

        return res.json({ restaurants });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

export default Router;