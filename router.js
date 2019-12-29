import express from 'express';

const userRouter = express.Router();

userRouter.get('/', (req, res) => {
  res.send('user idnex');
});

userRouter.get('/edit', (req, res) => {
  res.send('user edit');
});

userRouter.get('/profile', (req, res) => {
  res.send('user profile');
});

export default userRouter;
