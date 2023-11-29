//this is a configuration file for Routes

import JwtPassport from 'passport-jwt';

import { UserModel } from '../database/allModels';
import passport from 'passport';

//even if it is gmail / facebook / jwt authentication there will be certain strategies / methods used for each 
const JwtStrategy = JwtPassport.Strategy;

//to extract the jwt from the input we are giving
const ExtractJwt = JwtPassport.ExtractJwt;

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: "ZomatoApp"
};

export default (passport) => {
    passport.use(
        new JwtStrategy(options, async (jwt_payload, done) => {
            try {
                const doesUserExist = await UserModel.findById(jwt_payload.user);

                if (!doesUserExist) return done(null, false);

                return done(null, doesUserExist);

            } catch (error) {
                throw new Error(error);
            }
        })
    );
};