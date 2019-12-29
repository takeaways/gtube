import mongoose from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';
const Schema = mongoose.Schema;

const UserShchema = new Schema({
  name: String,
  email: String,
  avatarUrl: String,
  facebookId: Number,
  githubId: Number
});

UserShchema.plugin(passportLocalMongoose, { usernameField: 'email' });
const model = mongoose.model('User', UserShchema);

export default model;
