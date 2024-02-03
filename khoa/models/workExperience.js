// models/workExperience.js
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const workExperienceSchema = new mongoose.Schema({
  userID: { type: mongoose.Schema.Types.ObjectId, ref: 'UserProfile', required: true },
  personalSkills: { type: String },
  projects: [{
    projectName: { type: String, required: true },
    projectContent: { type: String, required: true },
    role: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date }
  }],
  workHistory: [{
    startDate: { type: Date, required: true },
    endDate: { type: Date },
    companyName: { type: String, required: true },
    role: { type: String, required: true }
  }]
});

const WorkExperience = mongoose.model('WorkExperience', workExperienceSchema);

module.exports = WorkExperience;
