import multer from 'multer';

import routes from './routes';

const upload = multer({ dest: 'uploads/' });
export const uploadVideo = upload.single('videoFile');

export const localsMiddlewares = (req, res, next) => {
  res.locals.siteName = 'GUBE';
  res.locals.routes = routes;
  res.locals.user = req.user || {};
  res.locals.loggedUser = req.user;
  next();
};
