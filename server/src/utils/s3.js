//file to connect to aws s3

import AWS from 'aws-sdk';
import dotenv from 'dotenv';

dotenv.config();

//s3 function to set-up the aws s3 bucket connection
const s3Bucket = new AWS.S3({
    accessKeyId: process.env.AWS_S3_ACCESS_KEY,
    secretAccessKey: process.env.AWS_S3_SECRET_KEY,
    region: "ap-south-1"
});


//file uploading fuction. it is to here the bucketOptions from the index file comes
export const s3Upload = (options) => {
    //Promise function is another kind of asyn await method
    return new Promise((resolve, reject) => {
        s3Bucket.upload(options, (error, data) => {
            if (error) {
                return reject(error);
            }

            return resolve(data);
        });
    });
};