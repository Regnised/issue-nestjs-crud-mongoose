import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { IUser } from './interfaces/user.interface';
import {MongooseCrudService} from 'nestjs-crud-mongoose';

@Injectable()
export class UserService extends MongooseCrudService<IUser> {
  constructor(@InjectModel('User') private readonly userModel: Model<IUser>) {
    super(userModel);
  }
}
