import express from 'express';

import routes from '../routes';
import { home, search } from '../controllers/videoController';
import {
  login,
  postLogin,
  join,
  postJoin,
  logout
} from '../controllers/userController';

const router = express.Router();

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

export default router;
