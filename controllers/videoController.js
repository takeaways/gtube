import { fakevideos } from '../fakedb';
import routes from '../routes';

export const home = (req, res) => {
  res.render('home', {
    pageTitle: '홈',
    videos: fakevideos
  });
};
export const search = (req, res) => {
  const { term: searchingBy = '검색어 없음!' } = req.query;
  res.render('search', {
    pageTitle: `${searchingBy}`,
    searchingBy,
    videos: fakevideos
  });
};

export const videos = (req, res) => res.send('videos');

//TODO: video upload
export const upload = (req, res) =>
  res.render('upload', { pageTitle: '비디오 업로드' });
export const postUpload = (req, res) => {
  const id = 2313;
  const title = 'geonil jang video';
  res.redirect(routes.videoDetail(id));
};

//TODO: video edit
export const editVideo = (req, res) =>
  res.render('editVideo', {
    pageTitle: '비디오 수정하기'
  });

//TODO: videoDetail
export const videoDetail = (req, res) =>
  res.render('videoDetail', {
    pageTitle: '비디오 자세히 보기'
  });
export const deleteVideo = (req, res) => res.send('deleteVideo');
