import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Users, UsersDocument } from './schemas/users.schemas';

@Injectable()
export class UsersService {
  constructor(@InjectModel(Users.name) private readonly usersModel: Model<UsersDocument>) {}

  async create(createUserDto: CreateUserDto) {
    try {
      const newUser = new this.usersModel(createUserDto);
      const result = await newUser.save();
      return { data: result, message: 'User registered successfully!' };
    } catch (error) {
      throw new Error('Could not register user');
    }
  }

  async findOne(username: string) {
    try {
      const result = await this.usersModel.findOne({ username }).exec();

      if (!result) {
        throw new NotFoundException('Username or Email not found');
      }

      return { message: 'Login successful', data: result };
    } catch (error) {
      throw new Error('Could not find user');
    }
  }

  async findById(id: string) {
    try {
      const result = await this.usersModel.findById(id).exec();

      if (!result) {
        throw new NotFoundException('user id not found');
      }

      return { message: 'Login successful', data: result };
    } catch (error) {
      throw new Error('Could not find user');
    }
  }


}
