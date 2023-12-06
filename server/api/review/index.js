import express from 'express';
import passport from 'passport';

import { ReviewModel } from '../../database/allModels'

const Router = express.Router();

/**
 * Route    /:resId
 * Desc     Get all review of a restaurant based on restaurant id
 * Params   resId
 * Access   Public
 * Method   GET
 */
Router.get('/:resId', async (req, res) => {
    try {
        const { resId } = req.params;

        const reviews = await ReviewModel.find({ restaurants: resId }).sort(
            { createdAt: -1 }
        );

        if (reviews.length === 0) {
            return res.status(404).json({ "message": "No Reviews found for this restaurant" });
        }

        return res.status(200).json({ reviews });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

export default Router;