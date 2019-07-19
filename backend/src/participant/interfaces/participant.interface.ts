import { Document } from 'mongoose';

export interface IParticipant extends Document {
  readonly id: string;
  readonly firstname: string;
  readonly lastname: string;
  readonly picture: string;
  readonly status: string;
  readonly socials: [];
}
