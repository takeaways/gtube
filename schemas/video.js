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
  viows: {
    type: Number,
    default: 0
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
