import * as mongoose from 'mongoose';

export const StudentSchema = new mongoose.Schema({
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
