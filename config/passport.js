import passport from "passport";
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET
};

passport.use("current", new JwtStrategy(opts, (jwt_payload, done) => {
    return done(null, jwt_payload);
}));

export default passport;