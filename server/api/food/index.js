import express from 'express';

import { FoodModel } from '../../database/allModels'
import { validateCategory, validateId } from '../../validation/common.validation';

const Router = express.Router();

/**
 * Route    /:_id
 * Desc     add new food item
 * Params   none
 * Access   Public
 * Method   POST
 */
//HomeWork

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
        await validateId(req.params);
        const food = await FoodModel.findById(_id);

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
        await validateId(req.params);
        const foods = await FoodModel.find({
            restaurants: _id
        });

        if (foods.length === 0) {
            return res.status(404).json({ message: "No restaurant found !!" });
        }

        return res.status(200).json({ foods });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/**
 * Route    /c/:category
 * Desc     Get all food items based on a particular category
 * Params   category
 * Access   Public
 * Method   GET
 */
Router.get('/c/:category', async (req, res) => {
    try {
        const { category } = req.params;

        //validate the category using joi
        await validateCategory(req.params);

        const foods = await FoodModel.find({
            category: { $regex: category, $options: "i" } //this method is used to get the category accurately using Regular Expression(regex used to check the given category name everywhere in the model) and options to check even without case sensitivity 
        });

        if (foods.length === 0) {
            return res.status(404).json({ error: `Food not found using the ${category}` });
        }

        return res.json({ foods });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

export default Router;