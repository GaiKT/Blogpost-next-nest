import { Injectable, NotFoundException} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { Comments , CommentsDocument } from './schemas/comments.schemas';

@Injectable()
export class CommentsService {
  constructor(
    @InjectModel(Comments.name) private readonly commentsModel: Model<CommentsDocument>
  ) {}

  async create(createCommentDto: CreateCommentDto){

    try{  
      const newcomment = new this.commentsModel(createCommentDto);  
      const result = await newcomment.save();
      return { data: result, message: 'Post created successfully!' };
    } catch (error) {
      throw new Error('Could not create post' + error);
    }
  }
  
  async findCommentById(postId : any): Promise<Comments[]> {
    return this.commentsModel.find({ post_id: postId }).populate('user_id').sort({ publishDate : -1 }).exec();
  }
  

  async update(id: string, updateCommentDto: UpdateCommentDto) {
    try {
      const result = await this.commentsModel
        .findByIdAndUpdate(id, updateCommentDto, { new: true })
        .exec();

      if (!result) {
        throw new NotFoundException('comment id not found');
      }

      return {
        data: result,
        message: 'comment updated successfully!',
      };
    } catch (error) {
      throw new Error('Could not update comment');
    }
  }

  async remove(id: string) {
    await this.commentsModel.deleteMany({post_id : id}).exec();
    return {
      message: `all comment in post id #${id} has been deleted`,
    };
  }

  async removeById(id: string) {
    try {
      const result = await this.commentsModel.findByIdAndDelete(id).exec();

      if (!result) {
        throw new NotFoundException('comment id not found');
      }

      return {
        message: `comment id #${id} has been deleted`,
      };
      
    } catch (error) {
      throw new Error('Could not delete comment');
    }
  }
}
