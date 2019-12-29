import express from 'express';
import routes from '../routes';
import {
  editProfile,
  changePassword,
  userDetail
} from '../controllers/userController';

const router = express.Router();

router.get(routes.editProfile, editProfile);
router.get(routes.changePassword, changePassword);
router.get(routes.users, (req, res) => console.log('users users'));
router.get(routes.userDetail(), userDetail);

export default router;
