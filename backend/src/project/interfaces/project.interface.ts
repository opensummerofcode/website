import { Document } from 'mongoose';

export interface IProject extends Document {
  readonly id: string;
  readonly name: string;
  readonly description?: string;
  readonly catchphrase?: string;
  readonly logo?: string;
  readonly repository?: string;
  readonly website?: string;
  readonly partners?: any;
  readonly team?: any;
  readonly linkedTo?: any;
}
