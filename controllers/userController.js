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

export const getEditProfile = (req, res) =>
  res.render('editProfile', {
    pageTitle: '프로필 수정'
  });

export const postEditProfile = async (req, res, next) => {
  try {
    const {
      body: { name, email },
      file
    } = req;

    const exUser = await User.findByIdAndUpdate(
      {
        _id: req.user.id
      },
      {
        $set: {
          name,
          email,
          avatarUrl: file ? file.path : req.user.avatarUrl
        }
      }
    );
    console.log(exUser);
    if (exUser) {
      res.redirect(routes.me);
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};
export const changePassword = (req, res) => {
  if (!req.user) res.redirect('/');
  res.render('changePassword', {
    pageTitle: '비밀번호 변경'
  });
};
export const postChangPassword = async (req, res, next) => {
  const { oldPassword, newPassword, newPassword1 } = req.body;
  if (newPassword !== newPassword1) {
    return res.status(400).redirect('/users' + routes.changePassword);
  }
  try {
    await req.user.changePassword(oldPassword, newPassword);
    res.redirect(routes.me);
  } catch (error) {
    res.redirect('/users', routes.changePassword);
    next(error);
  }
  console.log(req.body);
};
export const userDetail = async (req, res) => {
  const id = req.params.id;
  res.redirect(routes.home);
  // res.render('userDetail', {
  //   pageTitle: '프로필',
  //   id
  // });
};
export const getMe = (req, res) => {
  if (!req.user) res.redirect(routes.home);
  res.render('userDetail', {
    pageTitle: '프로필'
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
    const user = await User.findOne({
      email: email ? email : login
    });

    console.log(profile);
    if (user) {
      user.githubId = id;
      user.save();
      return cb(null, user);
    } else {
      let userEmail = '';
      if (!email && login) {
        userEmail = login;
      }
      userEmail = email;
      const newUser = await User.create({
        email: userEmail,
        name: profile.username,
        githubId: Number(id),
        avatarUrl
      });
      return cb(null, newUser);
    }
  } catch (error) {
    cb(error);
  }
};

export const postGithubLogIn = (req, res) => {
  res.redirect(routes.home);
};

export const kakaoCallback = async (
  accessToken,
  refreshToken,
  profile,
  done
) => {
  try {
    const {
      _json: {
        id,
        properties: { nickname: name, profile_image: avatarUrl },
        kakao_account: { email }
      }
    } = profile;

    const user = await User.findOne({
      email
    });

    if (user) {
      user.kakaoId = id;
      user.save();
      return done(null, user);
    } else {
      const newUser = await User.create({
        email,
        name,
        githubId: Number(id),
        avatarUrl
      });
      return done(null, newUser);
    }
  } catch (e) {
    done(e);
  }
};

export const postKakaoLogIn = (req, res) => {
  res.redirect(routes.home);
};
