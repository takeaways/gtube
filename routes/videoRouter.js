import express from 'express';
import routes from '../routes';
import {
  editVideo,
  videoDetail,
  upload,
  postUpload
} from '../controllers/videoController';

const router = express.Router();
router.get(routes.videos, (req, res) => console.log('video videos'));
router.get(routes.editVideo, editVideo);

//TODO: video Upload
router.get(routes.upload, upload);
router.post(routes.upload, postUpload);
//TODO: video detaile
router.get(routes.videoDetail(), videoDetail);

router.get(routes.deleteVideo, (req, res) => console.log('video deleteVideo'));

export default router;
