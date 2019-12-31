import express from 'express';
import routes from '../routes';
import {
  getEditProfile,
  postEditProfile,
  changePassword,
  userDetail,
  postChangPassword
} from '../controllers/userController';
import { uploadAvatar } from '../middlewares';

const router = express.Router();
router.get(routes.editProfile, getEditProfile);
router.post(routes.editProfile, uploadAvatar, postEditProfile);
router.get(routes.changePassword, changePassword);
router.post(routes.changePassword, postChangPassword);
router.get(routes.users, (req, res) => console.log('users users'));
router.get(routes.userDetail(), userDetail);
export default router;
