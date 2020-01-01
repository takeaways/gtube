import routes from '../routes';
import Video from '../schemas/video';
import {
  getVideoById,
  updateVideo,
  deleteVideoById,
  getBotsByTerm
} from '../dataSource/video';

export const home = async (req, res, next) => {
  try {
    const videos = await Video.find({}).sort({ _id: -1 });
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
export const search = async (req, res) => {
  const { term: searchingBy = '검색어 없음!' } = req.query;
  const videos = await getBotsByTerm(searchingBy);

  res.render('search', {
    pageTitle: `${searchingBy}`,
    searchingBy,
    videos
  });
};

export const videos = (req, res) => res.send('videos');

//TODO: video upload
export const upload = (req, res) =>
  res.render('upload', { pageTitle: '비디오 업로드' });
export const postUpload = async (req, res) => {
  const {
    body: { description, title }
  } = req;
  const fileUrl = (req.file && req.file.path) || 'nothing';

  const newVideo = await Video.create({
    fileUrl,
    title,
    description,
    creator: req.user.id
  });
  req.user.videos.push(newVideo._id);
  req.user.save();
  res.redirect(routes.videoDetail(newVideo.id));
};

//TODO: video edit
export const editVideo = async (req, res) => {
  try {
    const video = await getVideoById(req.params.id);
    if (!req.user) {
      return res.redirect(routes.videoDetail(video.id));
    }
    if (req.user.id != video.creator._id) {
      return res.redirect(routes.videoDetail(video.id));
    }

    if (!video) return res.redirect('/');
    res.render('editVideo', {
      pageTitle: video.title + ' 수정하기',
      video
    });
  } catch (error) {
    console.error(error);
    return res.redirect(routes.videoDetail(video._id));
  }
};
export const postEditVideo = async (req, res, next) => {
  try {
    const { title, description } = req.body;
    const query = {
      id: req.params.id,
      title,
      description
    };
    await updateVideo(query);
    res.redirect(routes.videoDetail(req.params.id));
  } catch (error) {
    console.error(error);
    next(error);
  }
};

//TODO: videoDetail
export const videoDetail = async (req, res, next) => {
  try {
    const video = await getVideoById(req.params.id);

    if (!video) {
      return res.redirect('/');
    }

    res.render('videoDetail', {
      pageTitle: '비디오 자세히 보기',
      video
    });
  } catch (error) {
    next(error);
  }
};

//TODO:video delete
export const deleteVideo = async (req, res, next) => {
  try {
    await deleteVideoById(req.params.id);
  } catch (error) {
    console.error(error);
    next(error);
  } finally {
    res.redirect('/');
  }
};
