import express from 'express';
import passport from 'passport';
import routes from '../routes';
import { home, search } from '../controllers/videoController';
import {
  login,
  postLogin,
  join,
  postJoin,
  logout,
  postGithubLogIn,
  postKakaoLogIn,
  getMe
} from '../controllers/userController';

const router = express.Router();
//TODO: ME
router.get(routes.me, getMe);
//TODO: home
router.get(routes.home, home);

//TODO: join
router.get(routes.join, join);
router.post(routes.join, postJoin, postLogin);

//TODO: login
router.get(routes.login, login);
router.post(routes.login, postLogin);

//TODO: logout
router.get(routes.logout, logout);
router.get(routes.search, search);

router.get(routes.github, passport.authenticate('github'));
router.get(
  routes.githubCallback,
  passport.authenticate('github', {
    failureRedirect: '/login'
  }),
  postGithubLogIn
);

router.get(routes.kakao, passport.authenticate('kakao'));
router.get(
  routes.kakaoCallback,
  passport.authenticate('kakao', {
    failureRedirect: '/login'
  }),
  postKakaoLogIn
);

export default router;
