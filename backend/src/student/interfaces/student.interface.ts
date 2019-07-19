import { Document } from 'mongoose';

export interface IStudent extends Document {
  readonly id: string;
  readonly firstname: string;
  readonly lastname: string;
  readonly picture: string;
  readonly socials: [];
}
