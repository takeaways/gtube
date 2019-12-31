import multer from 'multer';

import routes from './routes';

const multerVideo = multer({ dest: 'uploads/' });
const multerAvatar = multer({ dest: 'uploads/avatars/' });
export const uploadVideo = multerVideo.single('videoFile');
export const uploadAvatar = multerAvatar.single('avatar');

export const localsMiddlewares = (req, res, next) => {
  res.locals.siteName = 'GUBE';
  res.locals.routes = routes;
  res.locals.user = req.user;
  res.locals.loggedUser = req.user || null;
  next();
};
