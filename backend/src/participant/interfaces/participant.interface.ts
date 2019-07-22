import { Document } from 'mongoose';

export interface IParticipant extends Document {
  readonly id: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly picture: string;
  readonly status: string[];
  readonly socials: object;
}
