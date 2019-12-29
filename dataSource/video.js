import mongoose from 'mongoose';
import Video from '../schemas/video';
const ObjectId = mongoose.Types.ObjectId;

export const getVideoById = async id => {
  try {
    return await Video.findOne({ _id: ObjectId(id) });
  } catch (error) {
    throw error;
  }
};

export const updateVideo = async query => {
  try {
    return await Video.updateOne(
      { _id: ObjectId(query.id) },
      {
        $set: {
          title: query.title,
          description: query.description
        }
      }
    );
  } catch (error) {
    throw error;
  }
};

export const deleteVideoById = async id => {
  try {
    return await Video.remove({ _id: id });
  } catch (error) {
    throw error;
  }
};

export const getBotsByTerm = async term => {
  try {
    return await Video.find({ title: { $regex: `${term}` } });
  } catch (error) {
    throw error;
  }
};
