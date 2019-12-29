import passport from 'passport';
import User from '../schemas/user';

// import local from './local';

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
