import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';

import userRouter from './routes/userRouter';
import videoRouter from './routes/videoRouter';

const app = express();

//middlewares 에서 next가 있기 때문에 순서대로 적용되고 routes로 내려온다.
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/user', userRouter);
app.use('/video', videoRouter);

export default app;
