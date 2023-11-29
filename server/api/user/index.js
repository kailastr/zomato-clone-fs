import express from 'express';

import { UserModel } from '../../database/allModels'

const Router = express.Router();

/**
 * Route    /
 * Desc     Get Authorized user details
 * Params   none
 * Access   Public
 * Method   GET
 */
Router.get('/', async (req, res) => {
    try {
        
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

export default Router;