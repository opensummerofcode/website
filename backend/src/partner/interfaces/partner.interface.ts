import { Document } from 'mongoose';

export interface IPartner extends Document {
  readonly id: string;
  readonly name: string;
  readonly url: string;
  readonly logo: string;
}
