import express from 'express';
import routes from '../routes';

const router = express.Router();

router.get(routes.users, (req, res) => console.log('video users'));
router.get(routes.userDetail, (req, res) => console.log('video userDetail'));
router.get(routes.editProfile, (req, res) => console.log('video editProfile'));
router.get(routes.changePassword, (req, res) =>
  console.log('video changePassword')
);

export default router;
