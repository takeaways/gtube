import express from 'express';
import routes from '../routes';

const router = express.Router();
router.get(routes.videos, (req, res) => console.log('video videos'));
router.get(routes.upload, (req, res) => console.log('video upload'));
router.get(routes.videoDetail, (req, res) => console.log('video videoDetail'));
router.get(routes.editVideo, (req, res) => console.log('video editVideo'));
router.get(routes.deleteVideo, (req, res) => console.log('video deleteVideo'));

export default router;
