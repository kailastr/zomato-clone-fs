import express from 'express';
import { MenuModel, ImageModel } from '../../database/allModels'

const Router = express.Router();

/**
 * Route    /list/:_id
 * Desc     Get list of menus based on menu id
 * Params   _id
 * Access   Public
 * Method   GET
 */
Router.get('/list/:_id', async (req, res) => {
    try {
        const { _id } = req.params;

        const menus = MenuModel.findById(_id);
        if (!menus) {
            return res.status(404).json({ error: "No Menus found in this restaurant" });
        }

        return res.json({ menus });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

export default Router;