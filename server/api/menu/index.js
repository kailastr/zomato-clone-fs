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
Router.get("/list/:_id", async (req, res) => {
    try {
        const { _id } = req.params;
        const menus = await MenuModel.findById(_id);

        if (!menus) {
            return res
                .status(404)
                .json({ error: "No menu present for this restaurant" });
        }

        return res.json({ menus });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/**
 * Route    /image/:_id
 * Desc     Get list of menu images with id
 * Params   _id
 * Access   Public
 * Method   GET
 */
Router.get('/image/:_id', async (req, res) => {
    try {
        const { _id } = req.params;
        const menuImage = await ImageModel.findOne({ _id });

        if (!menuImage) {
            return res.status(404).json({ message: "No menu images found " });
        }

        return res.status(200).json({ menuImage });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

export default Router;