import { Document } from 'mongoose';

export interface ICompany extends Document {
  readonly name: string;
}
