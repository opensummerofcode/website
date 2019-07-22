import * as mongoose from 'mongoose';

export const PartnerSchema = new mongoose.Schema({
  name: { type: String, unique: true },
  url: String,
  logo: String,
  logoPublicId: String,
});
