(function() {
  const videoContainer = document.getElementById('jsVideoPlayer');
  const videoPlayer = document.querySelector('#jsVideoPlayer video');
  const playButton = document.getElementById('jsPlayButton');
  const volumBtn = document.getElementById('jsVolumeBtn');
  const screenBtn = document.getElementById('jsFullScreen');
  const currentTime = document.getElementById('currentTime');
  const totalTime = document.getElementById('totalTime');
  const volumeRange = document.getElementById('jsVolume');
  let interval = '';

  function handlePlayClick() {
    if (videoPlayer.paused) {
      interval = setInterval(setCurrentTime, 300);
      videoPlayer.play();
      playButton.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
      videoPlayer.pause();
      clearInterval(interval);
      playButton.innerHTML = '<i class="fas fa-play"></i>';
    }
  }

  function handleVolumeClick() {
    if (videoPlayer.muted) {
      videoPlayer.muted = false;
      volumeRange.value = videoPlayer.volume;
      let value = videoPlayer.volume;
      if (value >= 0.5) {
        volumBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
      } else if (value >= 0.3) {
        volumBtn.innerHTML = '<i class="fas fa-volume-down"></i>';
      } else if (value == 0) {
        volumBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
      } else {
        volumBtn.innerHTML = '<i class="fas fa-volume-off"></i>';
      }
    } else {
      videoPlayer.muted = true;
      volumeRange.value = 0;
      volumBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
    }
  }

  function makeFullScreen() {
    videoContainer.requestFullscreen();
    screenBtn.innerHTML = '<i class="fas fa-compress"></i>';
    screenBtn.removeEventListener('click', makeFullScreen);
    screenBtn.addEventListener('click', makeNormalScreen);
  }
  function makeNormalScreen() {
    document.exitFullscreen();
    screenBtn.innerHTML = '<i class="fas fa-expand"></i>';
    screenBtn.removeEventListener('click', makeNormalScreen);
    screenBtn.addEventListener('click', makeFullScreen);
  }

  function formatDate(seconds) {
    const secondsNumber = parseInt(seconds, 10);
    let hours = Math.floor(secondsNumber / 3600);
    let minutes = Math.floor((secondsNumber - hours * 3600) / 60);
    let totalSeconds = secondsNumber - hours * 3600 - minutes * 60;

    if (hours < 10) {
      hours = `0${hours}`;
    }
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    if (seconds < 10) {
      totalSeconds = `0${totalSeconds}`;
    }
    return `${hours}:${minutes}:${totalSeconds}`;
  }

  function setTotalTime() {
    const totalTimeString = formatDate(videoPlayer.duration);
    totalTime.innerHTML = totalTimeString;
  }

  function setCurrentTime() {
    currentTime.innerHTML = formatDate(Math.floor(videoPlayer.currentTime));
  }

  function endedVideo() {
    playButton.innerHTML = '<i class="fas fa-play"></i>';
    videoPlayer.currentTime = 0;

    setTimeout(() => {
      clearInterval(interval);
    }, 1000);
  }

  function volumeHandler(e) {
    const value = e.target.value;
    videoPlayer.volume = value;
    if (value >= 0.6) {
      volumBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
    } else if (value >= 0.3) {
      volumBtn.innerHTML = '<i class="fas fa-volume-down"></i>';
    } else if (value == 0) {
      volumBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
    } else {
      volumBtn.innerHTML = '<i class="fas fa-volume-off"></i>';
    }
  }

  function init() {
    videoPlayer.volume = 0.5;
    playButton.addEventListener('click', handlePlayClick);
    volumBtn.addEventListener('click', handleVolumeClick);
    screenBtn.addEventListener('click', makeFullScreen);
    videoPlayer.addEventListener('loadedmetadata', setTotalTime);
    videoPlayer.addEventListener('ended', endedVideo);
    volumeRange.addEventListener('input', volumeHandler);
    volumBtn.addEventListener('mouseover', () => {
      volumeRange.style.display = 'flex';
    });
    volumeRange.addEventListener('mouseleave', () => {
      volumeRange.style.display = 'none';
    });
  }

  if (videoContainer) {
    init();
  }
})();
