import express from 'express';
import AWS from 'aws-sdk';
import multer from 'multer';

import { ImageModel } from '../../database/allModels';

import { s3Upload } from '../../utils/s3';

const Router = express.Router();

//multer configuration
const storage = multer.memoryStorage();
const upload = multer({ storage });

/**
 * Route:   /:_id
 * Desc:    Get image details
 * Params   :_id
 * Access   Public
 * Method   GET
 */
Router.get('/:_id', async (req, res) => {
    try {
        const image = await ImageModel.findById(req.params._id);

        return res.status(200).json({
            image
        });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/**
 * Route:   /
 * Desc:    Upload given image to s3 bucketa and save file link to MongoDB
 * Params   :_id
 * Access   Public
 * Method   POST
 */
Router.post('/', upload.single("file"), async (req, res) => {
    try {
        const file = req.file;

        const bucketOptions = {
            Bucket: "zomato-fswd-clone", //the name of the bucket
            Key: file.originalname, //the name that file should have to be
            Body: file.buffer, //since the file could be large in size, it is stored as buffer
            ContentType: file.mimetype, //mimetype specifies what is the type of the file we are uploading
            ACL: "public-read" //Access Control List (The access type)
        }

        //we will pass the bucketOptions to aws s3 function to upload
        const UploadImage = await s3Upload(bucketOptions);

        //from the s3 bucket we only need the location of the image to be stored in the DB
        const dbUpload = await ImageModel.create({
            images: [
                {
                    location: UploadImage.Location
                }
            ]
        })

        return res.status(200).json({ dbUpload });

    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
});


export default Router;
