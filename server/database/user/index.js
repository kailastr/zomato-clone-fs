import mongoose from 'mongoose';

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



export const UserModel = mongoose.model('users', UserSchema);