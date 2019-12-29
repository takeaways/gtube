import routes from './routes';

export const localsMiddlewares = (req, res, next) => {
  res.locals.siteName = 'GUBE';
  res.locals.routes = routes;
  res.locals.user = {
    isAuthenticated: true,
    id: 1
  };
  next();
};
