import express from 'express';

import { FoodModel } from '../../database/allModels'

const Router = express.Router();

/**
 * Route    /:_id
 * Desc     Get food based on id
 * Params   _id
 * Access   Public
 * Method   GET
 */
Router.get('/:_id', async (req, res) => {
    try {
        const { _id } = req.params;
        const food = FoodModel.findById(_id);

        return res.status(200).json({ food });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/**
 * Route    /r/:_id
 * Desc     Get all foods based on a particular restaurant
 * Params   _id
 * Access   Public
 * Method   GET
 */
Router.get('/r/:_id', async (req, res) => {
    try {
        const { _id } = req.params;
        const foods = FoodModel.find({
            restaurants: _id
        });

        return res.status(200).json({ foods });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

export default Router;