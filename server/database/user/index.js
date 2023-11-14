import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const UserSchema = new mongoose.Schema(
    {
        fullName: { type: String, required: true },
        email: { type: String, required: true },
        password: String,
        address: [
            { details: { type: String }, for: { type: String } }
        ],
        phoneNumber: [{ type: Number }],
    },
    {
        timestamps: true
    }
);

//methods are attachments to your model
UserSchema.methods.generateJwtToken = function () {
    //sign is a method in jwt which is used to create a new token which contains an object and a secrete key used for encryption
    return jwt.sign({ user: this._id.toString() }, 'ZomatoApp');
};

//statics are helper functions which is not attached to the schema
//this function will be used in the time of signUp
UserSchema.statics.findByEmailAndPhone = async ({ email, PhoneNum }) => {
    const checkUserByEmail = await UserModel.findOne({ email });
    const checkUserByPhoneNum = await UserModel.findOne({ PhoneNum });

    if (checkUserByEmail || checkUserByPhoneNum) {
        throw new Error("User already exist with this Email or Phone Number !!");
    }
    return false;
};

//this function will be used at the time of Login and SignUp
UserSchema.statics.findByEmailAndPassword = async ({ email, password }) => {
    const findByEmail = await UserModel.findOne({ email });
    if (!findByEmail) throw new Error("User doesn't found in this email-Id !!");

    //password comparing
    const doesPasswordMatch = await bcrypt.compare(password, user.password);
    if (!doesPasswordMatch) throw new Error("Invalid Password");

    return findByEmail;
};

//data encryption and creating new data

export const UserModel = mongoose.model('users', UserSchema);