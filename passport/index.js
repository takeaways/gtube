import passport from 'passport';
import dotenv from 'dotenv';
dotenv.config();
import User from '../schemas/user';
import { Strategy } from 'passport-github';
import { githubCallback } from '../controllers/userController';
import routes from '../routes';

// import githubSTG from './github';

const GitHubStrategy = Strategy;

passport.use(User.createStrategy());
passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GH_ID,
      clientSecret: process.env.GH_SC,
      callbackURL: `https://gtube.geoniljang.com${routes.githubCallback}`
    },
    githubCallback
  )
);
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
