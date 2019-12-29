import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';

import userRouter from './routes/userRouter';
import videoRouter from './routes/videoRouter';
import globalRouter from './routes/globalRouter';

import routes from './routes';

import { localsMiddlewares } from './middlewares';

const app = express();

//view egin settings
app.set('view engine', 'pug');
app.use('/uploads', express.static('uploads'));
//middlewares 에서 next가 있기 때문에 순서대로 적용되고 routes로 내려온다.
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//for using local values
app.use(localsMiddlewares);

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;
