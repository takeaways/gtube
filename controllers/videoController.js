import { fakevideos } from '../fakedb';

export const home = (req, res) => {
  res.render('home', {
    pageTitle: '홈',
    fakevideos
  });
};
export const search = (req, res) => {
  const { term: searchingBy = '검색어 없음!' } = req.query;
  res.render('search', {
    pageTitle: `${searchingBy}`,
    searchingBy
  });
};

export const videos = (req, res) => res.send('videos');
export const upload = (req, res) => res.send('upload');

export const editVideo = (req, res) =>
  res.render('editVideo', {
    pageTitle: '비디오 수정하기'
  });

export const videoDetail = (req, res) => res.send('videoDetail');
export const deleteVideo = (req, res) => res.send('deleteVideo');
