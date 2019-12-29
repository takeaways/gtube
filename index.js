import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import passport from 'passport';
import dotenv from 'dotenv';
dotenv.config();
import './passport';
import userRouter from './routes/userRouter';
import videoRouter from './routes/videoRouter';
import globalRouter from './routes/globalRouter';

import routes from './routes';

import { localsMiddlewares } from './middlewares';

const app = express();

//view egin settings
app.set('view engine', 'pug');
app.use('/uploads', express.static('uploads'));
app.use('/static', express.static('static'));
//middlewares 에서 next가 있기 때문에 순서대로 적용되고 routes로 내려온다.
app.use(helmet());
app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SCRET));
app.use(
  session({
    secret: process.env.COOKIE_SCRET,
    resave: true,
    saveUninitialized: false,
    name: 'giW'
  })
);
app.use(passport.initialize());
app.use(passport.session());

//for using local values
app.use(localsMiddlewares);

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;
