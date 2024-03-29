const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  profileID: { type: mongoose.Schema.Types.ObjectId, ref: 'UserProfile', required: true }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
