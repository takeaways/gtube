export const login = (req, res) => {
  res.render('login', {
    pageTitle: '로그인'
  });
};

export const join = (req, res) => {
  res.render('join', {
    pageTitle: '회원가입'
  });
};
export const logout = (req, res) => res.send('logout');

export const users = (req, res) => res.send('users');

export const editProfile = (req, res) =>
  res.render('editProfile', {
    pageTitle: '프로필 수정'
  });
export const changePassword = (req, res) =>
  res.render('changePassword', {
    pageTitle: '비밀번호 변경'
  });
export const userDetail = (req, res) => res.send('userDetail');
