import passport from 'passport';
import dotenv from 'dotenv';
dotenv.config();
import User from '../schemas/user';
import { Strategy as GitHubStrategy } from 'passport-github';
import { Strategy as KaKaoStrategy } from 'passport-kakao';

import { githubCallback, kakaoCallback } from '../controllers/userController';
import routes from '../routes';

passport.use(User.createStrategy());

passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GH_ID,
      clientSecret: process.env.GH_SC,
      callbackURL: `${process.env.DOMAIN}${routes.githubCallback}`
    },
    githubCallback
  )
);
passport.use(
  new KaKaoStrategy(
    {
      clientID: process.env.KAKAO_ID,
      clientSecret: process.env.KAKAO_SC,
      callbackURL: `${process.env.DOMAIN}${routes.kakaoCallback}`
    },
    kakaoCallback
  )
);

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
