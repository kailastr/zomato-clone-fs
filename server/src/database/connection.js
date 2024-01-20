import mongoose from "mongoose";

export default async () => {
    return mongoose.connect(process.env.MONGO_URL); //this line will help to connect to our MongoDB
}