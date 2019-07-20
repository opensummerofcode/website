import * as mongoose from 'mongoose';
const ObjectId = mongoose.Schema.Types.ObjectId;

export const ProjectSchema = new mongoose.Schema({
  name: String,
  description: String,
  catchphrase: String,
  logo: String,
  repository: String,
  website: String,
  partners: [{ type: ObjectId, ref: 'Partner' }],
  team: [{ type: ObjectId, ref: 'Participant' }],
  linkedTo: [{ type: ObjectId, ref: 'Project' }],
});
