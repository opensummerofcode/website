import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

export interface IParticipant extends Document {
  readonly id: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly picture: string;
  readonly picturePublicId: string;
  readonly status: mongoose.Types.Array<string>;
  readonly socials: object;
}
