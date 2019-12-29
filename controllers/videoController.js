import { fakevideos } from '../fakedb';
import routes from '../routes';
import Video from '../schemas/video';

export const home = async (req, res) => {
  try {
    const videos = await Video.find({});
    return res.render('home', {
      pageTitle: '홈',
      videos
    });
  } catch (error) {
    console.log(error);
    res.render('home', {
      pageTitle: '홈',
      videos: []
    });
  }
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
export const postUpload = async (req, res) => {
  const {
    body: { description, title },
    file: { path: fileUrl }
  } = req;

  const newVideo = await Video.create({
    fileUrl,
    title,
    description
  });
  res.redirect(routes.videoDetail(newVideo.id));
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
