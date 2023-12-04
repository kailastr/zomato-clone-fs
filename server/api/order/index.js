import express from 'express';
import passport from 'passport';

import { OrderModel } from '../../database/allModels';

const Router = express.Router();

/**
 * Route    /:_id
 * Desc     Get all orders based on order id
 * Params   _id
 * Access   Private
 * Method   GET
*/
Router.get();

export default Router;