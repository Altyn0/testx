const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const additionalInfoSchema = new mongoose.Schema({
  userID: { type: mongoose.Schema.Types.ObjectId, ref: 'UserProfile', required: true },
  hobbies: { type: String },
  personalGoals: { type: String }
});

const AdditionalInfo = mongoose.model('AdditionalInfo', additionalInfoSchema);

module.exports = AdditionalInfo;
