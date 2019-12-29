import passport from 'passport';
import routes from '../routes';
import User from '../schemas/user';

//TODO:join
export const join = (req, res) => res.render('join', { pageTitle: '회원가입' });

export const postJoin = async (req, res, next) => {
  const { name, email, password, password2 } = req.body;
  if (password !== password2) {
    return res.status(400).render('join', { pageTitle: '회원가입' });
  }
  try {
    const exUser = await User.findOne({ email });
    if (exUser) {
      console.log(exUser);
      return res.status(404).render('join', { pageTitle: '회원가입' });
    }
    const newUser = await User({
      name,
      email
    });
    await User.register(newUser, password);
    next();
  } catch (error) {
    console.error(error);
    next(error);
  } finally {
    res.redirect(routes.home);
  }
};

//TODO:login
export const login = (req, res) => res.render('login', { pageTitle: '로그인' });
export const postLogin = passport.authenticate('local', {
  failureRedirect: routes.login,
  successRedirect: routes.home
});

//TODO:logout
export const logout = (req, res) => {
  req.logout();
  res.redirect(routes.home);
};

export const users = (req, res) => res.send('users');

export const editProfile = (req, res) =>
  res.render('editProfile', {
    pageTitle: '프로필 수정'
  });
export const changePassword = (req, res) =>
  res.render('changePassword', {
    pageTitle: '비밀번호 변경'
  });
export const userDetail = (req, res) => {
  const id = req.params.id;
  res.render('userDetail', {
    pageTitle: '프로필',
    id
  });
};

//FIXME: gitgub
export const githubCallback = async (
  accessToken,
  refreshToken,
  profile,
  cb
) => {
  try {
    const {
      _json: { id, avatar_url: avatarUrl, login, email }
    } = profile;
    console.log(profile._json);
    const user = await User.findOne({
      email
    });
    if (user && email) {
      console.log('user.>>', user);
      console.log(id);
      user.githubId = id;
      user.save();

      return cb(null, user);
    } else {
      console.log('Adadas');
      const newUser = await User.create({
        email,
        name: login,
        githubId: Number(id),
        avatarUrl
      });
      console.log('newUser.>>', newUser);
      return cb(null, newUser);
    }
  } catch (error) {
    cb(error);
  }
};

export const postGithubLogIn = (req, res) => {
  res.redirect(routes.home);
};
