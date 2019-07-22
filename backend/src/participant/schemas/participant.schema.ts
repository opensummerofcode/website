import * as mongoose from 'mongoose';

export const ParticipantSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  picture: String,
  picturePublicId: String,
  status: [
    {
      type: String,
      enum: ['student', 'coach', 'ambassador'],
      default: 'student',
    },
  ],
  socials: {
    twitter: String,
    facebook: String,
    instagram: String,
    github: String,
    youtube: String,
    behance: String,
    linkedin: String,
  },
});
