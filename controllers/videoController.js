export const home = (req, res) => res.render('home', { pageTitle: '홈' });
export const search = (req, res) => {
  const { term: searchingBy = '검색어 없음!' } = req.query;

  res.render('search', {
    pageTitle: `${searchingBy}`,
    searchingBy
  });
};

export const videos = (req, res) => res.send('videos');
export const upload = (req, res) => res.send('upload');
export const videoDetail = (req, res) => res.send('videoDetail');
export const editVideo = (req, res) => res.send('editVideo');
export const deleteVideo = (req, res) => res.send('deleteVideo');
