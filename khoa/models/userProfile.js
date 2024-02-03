const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const userProfileSchema = new mongoose.Schema({
    _id:ObjectId,
  fullName: { type: String, required: true },
  birthDate: { type: Date, required: true },
  placeOfBirth: { type: String, required: true },
  nationality: { type: String, required: true },
  educationHistory: { type: String }
});

const UserProfile = mongoose.model('UserProfile', userProfileSchema);

module.exports = UserProfile;
