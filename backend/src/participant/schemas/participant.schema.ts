import * as mongoose from 'mongoose';

export const ParticipantSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  picture: String,
  status: {
    type: String,
    default: 'Student',
  },
  socials: [
    {
      url: String,
      platform: String,
    },
  ],
});
