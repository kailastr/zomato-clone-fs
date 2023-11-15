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
    //this keyword is used to get the id from the current instance while a new user is being created
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
    const findUserByEmail = await UserModel.findOne({ email });
    if (!findUserByEmail) throw new Error("User doesn't found in this email-Id !!");

    //password comparing
    const doesPasswordMatch = await bcrypt.compare(password, user.password);
    if (!doesPasswordMatch) throw new Error("Invalid Password");

    return findUserByEmail;
};

//data encryption while creating new data(user)
//pre method occurs before taking an action (ie; before a user is being created)
UserSchema.pre('save', function (next) {
    const user = this;

    //if the user is login using email (ie; without password)
    if (!user.isModified('password')) {
        return next(); //next is used when if we could go further
    }

    //if the user is logging in using password we want to bcrypt saltting/hashing (encrypt)
    bcrypt.genSalt(8, (error, salt) => { //the first parameter(error) is to hold the error and the second para(salt) is to hold the salt encrypted password
        //if error occurs in salting
        if (error) {
            return next(error);
        }

        //if salting succeseeded then hash
        bcrypt.hash(user.password, salt, (error, hash) => { //the first parameter(error) is to hold the error and the second para(hash) is to hold the hash encrypted password
            if (error) {
                return next(error);
            }

            //assigining hashed password
            user.password = hash; //here the final encrypted data will be given to the password variable in the user data
            return next();
        });
    });
});

export const UserModel = mongoose.model("users", UserSchema);