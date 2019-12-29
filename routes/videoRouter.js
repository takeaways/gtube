import express from 'express';
import routes from '../routes';
import {
  editVideo,
  videoDetail,
  upload,
  postUpload,
  postEditVideo,
  deleteVideo
} from '../controllers/videoController';
import { uploadVideo } from '../middlewares';

const router = express.Router();
router.get(routes.videos, (req, res) => console.log('video videos'));

//TODO: edit Video
router.get(routes.editVideo(), editVideo);
router.post(routes.editVideo(), postEditVideo);

//TODO: video Upload
router.get(routes.upload, upload);
router.post(routes.upload, uploadVideo, postUpload);

//TODO: video detaile
router.get(routes.videoDetail(), videoDetail);

//TODL: video delete
router.get(routes.deleteVideo(), deleteVideo);

export default router;
