import * as mongoose from 'mongoose';

export const ParticipantSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  picture: String,
  socials: [
    {
      url: String,
      platform: String,
    },
  ],
});
