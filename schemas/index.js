import mongoose from 'mongoose';

module.exports = () => {
  const connect = () => {
    mongoose.connect(
      process.env.MONGO_URL,
      {
        dbName: process.env.DB_NAME,
        useNewUrlParser: true,
        useUnifiedTopology: true
      },
      error => {
        if (error) {
          return console.log('몽고디비 연결 에러 ... ', error);
        }
        console.log('몽고 연결 성공');
      }
    );
  };
  connect();
  const db = mongoose.connection;
  const handleOpen = () => console.log('Connected to DB');
  const handleError = error => console.log('Error db Connection ', error);
  const handleDisconnected = () => {
    console.log('몽고디비와 연결이 끊겼습니다. 재연결을 시도합니다.');
    connect();
  };
  db.once('open', handleOpen);
  db.on('error', handleError);
  db.on('disconnected', handleDisconnected);
};
