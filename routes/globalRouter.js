import express from 'express';

import routes from '../routes';
import { home, search } from '../controllers/videoController';
import { login, join, postJoin, logout } from '../controllers/userController';

const router = express.Router();

router.get(routes.home, home);
//join
router.get(routes.join, join);
router.post(routes.join, postJoin);

router.get(routes.login, login);
router.get(routes.logout, logout);
router.get(routes.search, search);

export default router;
