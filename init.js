import app from './index';
import dotenv from 'dotenv';
import db from './schemas';
dotenv.config();

const PORT = 4000;

db();
const listenHandler = () => {
  console.log(`Server start at Port ${PORT}`);
};
app.listen(PORT, listenHandler);
