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

/**
 * Route    /new
 * Desc     Add new food/restaurant review and rating
 * Params   none
 * Access   Private
 * Method   POST
 */
Router.post('/new', passport.authenticate("jwt", { session: false }), async (req, res) => {
    try {
        const { _id } = req.user;
        const { reviewData } = req.body;

        const review = await ReviewModel.create({ ...reviewData, user: _id }); //in this line we are saying that the content inside the reviewData should have to be updated and the "user" field which contain userId should have to remain as _id

        return res.status(200).json({ review });
    }
    catch (error) {
        return res.status(500).json({ error: error.message });
    }
})

/**
 * Route    /delete/:_id
 * Desc     To delete a review
 * Params   _id
 * Access   Private
 * Method   DELETE
 */
Router.delete('/delete/:id', passport.authenticate("jwt", { session: false }), async (req, res) => {
    try {
        const { id } = req.params; //to get the review id
        const { user } = req; //to get the user id

        const deletedData = await ReviewModel.findOneAndDelete({
            _id: id, //to confirm that the specific review is deleting
            user: user._id //to confirm that the authorised user id deleting
        });

        if (!deletedData) {
            return res.status(404).json({ message: "No review found to be deleted in this id " });
        }

        return res.json({ deletedData, message: "Review deleted successfully" })
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

export default Router;