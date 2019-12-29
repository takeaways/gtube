import express from 'express';
import morgan from 'morgan';
const app = express();

const PORT = 8000;

app.use(morgan('dev'));
app.get('/', (req, res) => res.send('Welcome '));
app.get('/profile', (req, res) => res.send('Welcome profile'));

const postListen = () => console.log('server start at port ', PORT);

app.listen(PORT, postListen);
