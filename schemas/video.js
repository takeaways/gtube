import mongoose from 'mongoose';

const videoSchema = new mongoose.Schema({
  fileUrl: {
    type: String
  },
  title: {
    type: String,
    required: 'Title is required'
  },
  description: String,
  views: {
    type: Number,
    default: 0
  },
  creator: {
    type: mongoose.Types.ObjectId,
    ref: 'User'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comment'
    }
  ]
});

export default mongoose.model('Video', videoSchema);
