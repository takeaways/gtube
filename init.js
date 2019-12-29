import app from './index';

const PORT = 4000;

const listenHandler = () => console.log(`Server start at Port ${PORT}`);
app.listen(PORT, listenHandler);
