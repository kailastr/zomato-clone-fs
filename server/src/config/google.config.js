import googleOAuth from "passport-google-oauth2";

import { UserModel } from '../database/allModels';

const GoogleStrategy = googleOAuth.Strategy;

export default (passport) => {
    passport.use(
        new GoogleStrategy({
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: `${process.env.REACT_APP_CLIENT_URL}auth/google/callback`
        },

            //if a user successfully sign Up then the below async callback funciton is called
            async (accessToken, refreshToken, profile, done) => {
                const newUser = {
                    fullName: profile.displayName,
                    email: profile.emails[0].value,
                    profilePic: profile.photos[0].value
                };

                try {
                    const user = await UserModel.findOne({ email: newUser.email });

                    if (user) {
                        const token = user.generateJwtToken();

                        done(null, { user, token });
                    }
                    else {
                        const user = await UserModel.create(newUser);

                        const token = user.generateJwtToken();

                        done(null, { user, token });
                    }

                }
                catch (error) {
                    done(error, null);
                }
            }
        )
    );

    passport.serializeUser((userData, done) => done(null, { ...userData }));
    passport.deserializeUser((id, done) => done(null, id));
};