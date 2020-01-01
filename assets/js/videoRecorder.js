(function() {
  const recorderContainer = document.getElementById('jsRecordContainer');
  const recordBtn = document.getElementById('jsRecordBtn');
  const videoPreview = document.getElementById('jsVideoPreview');
  let streamObject = '';
  let videoRecorder = '';
  let link = document.createElement('a');

  const handleVideoData = e => {
    const { data: videoFile } = e;
    if (link) {
      link.href = URL.createObjectURL(videoFile);
      link.download = 'recorded.webm';
      document.body.appendChild(link);
      link.click();
      link = '';
    } else {
      console.log('비디오 녹화는 한 번 만 가능합니다.');
      location.reload();
    }
  };

  const startRecording = () => {
    videoRecorder = new MediaRecorder(streamObject);
    videoRecorder.start();
    videoRecorder.addEventListener('dataavailable', handleVideoData);
    recordBtn.addEventListener('click', stopRecording);
  };

  const stopRecording = () => {
    videoRecorder.stop();

    recordBtn.innerHTML = 'Start recording';
    recordBtn.removeEventListener('click', stopRecording);
    recordBtn.addEventListener('click', getVideo);
  };

  const getVideo = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true
      });
      console.dir(stream);
      videoPreview.srcObject = stream;
      videoPreview.muted = true;
      videoPreview.play();

      recordBtn.innerHTML = 'Stop recording';
      streamObject = stream;
      startRecording();
    } catch (error) {
      console.error(error);
      recordBtn.innerHTML = "Can't record";
    } finally {
      recordBtn.removeEventListener('click', getVideo);
    }
  };

  function init() {
    recordBtn.addEventListener('click', getVideo);
  }

  if (recorderContainer) {
    init();
  }
})();
