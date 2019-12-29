import app from './index';
import dotenv from 'dotenv';
import db from './schemas';
dotenv.config();

import './schemas/user';
import './schemas/video';
import './schemas/comment';

const PORT = 4000;

const listenHandler = () => {
  console.log(`Server start at Port ${PORT}`);
  db();
};
app.listen(PORT, listenHandler);
