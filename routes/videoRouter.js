import express from 'express';
import routes from '../routes';
import { editVideo } from '../controllers/videoController';

const router = express.Router();
router.get(routes.videos, (req, res) => console.log('video videos'));
router.get(routes.editVideo, editVideo);
router.get(routes.upload, (req, res) => console.log('video upload'));
router.get(routes.videoDetail, (req, res) => console.log('video videoDetail'));
router.get(routes.deleteVideo, (req, res) => console.log('video deleteVideo'));

export default router;
