import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Posts, PostsDocument } from './schemas/post.schemas';
import { CommentsService } from 'src/comments/comments.service';

@Injectable()
export class PostsService {
  constructor(
    @InjectModel(Posts.name) private readonly postsModel: Model<PostsDocument>,
    private readonly commentsService: CommentsService,
  ) {}

  async create(createPostDto: CreatePostDto) {
    try {
      const newPost = new this.postsModel(createPostDto);
      const result = await newPost.save();
      return { data: result, message: 'Post created successfully!' };
    } catch (error) {
      throw new Error('Could not create post');
    }
  }

  async findAll(keyword: string) {
    const filter: any = {};

    if (keyword) {
      filter.$or = [
        { title: { $regex: keyword, $options: 'i' } },
        { community: { $regex: keyword, $options: 'i' } },
        { discription: { $regex: keyword, $options: 'i' } }
      ];
    }
  
    const posts = await this.postsModel.find(filter).populate('user_id').sort({ publishDate : -1 }).exec();
  
    const postsWithComments = await Promise.all(posts.map(async (post) => {
      const comments = await this.commentsService.findCommentById(post._id.toString());
  
      // Convert Mongoose document to plain object
      const postObj = post.toObject();
  
      return { ...postObj, comments };
    }));
  
    return postsWithComments;
  }

  async findwithUserId(keyword: string , user_id: string) {

    const filter: any = {user_id};

    if(!user_id) {
      throw new Error('Could not find post');
    }
    
    if (keyword) {
      filter.$or = [
        { title: { $regex: keyword, $options: 'i' } },
        { community: { $regex: keyword, $options: 'i' } },
        { discription: { $regex: keyword, $options: 'i' } }
      ];
    }
  
    const posts = await this.postsModel.find(filter).populate('user_id').sort({ publishDate : -1 }).exec();
  
    const postsWithComments = await Promise.all(posts.map(async (post) => {
      const comments = await this.commentsService.findCommentById(post._id.toString());
  
      // Convert Mongoose document to plain object
      const postObj = post.toObject();
  
      return { ...postObj, comments };
    }));
  
    return postsWithComments;
  }
  

  async findOne(id: string) {
    try {
      const post = await this.postsModel.findById(id)
        .populate('user_id')
        .exec();
  
      if (!post) {
        throw new NotFoundException('Post id not found');
      }
  
      // Convert Mongoose document to plain object
      const postObj = post.toObject();
  
      const comments = await this.commentsService.findCommentById(post._id.toString());
  
      return { ...postObj, comments };
    } catch (error) {
      throw new Error('Could not find post');
    }
  }
  

  async update(id: string, updatePostDto: UpdatePostDto) {
    try {
      const result = await this.postsModel
        .findByIdAndUpdate(id, updatePostDto, { new: true })
        .exec();

      if (!result) {
        throw new NotFoundException('Post id not found');
      }

      return {
        data: result,
        message: 'Post updated successfully!',
      };
    } catch (error) {
      throw new Error('Could not update post');
    }
  }

  async remove(id: string) {
    try {
      const result = await this.postsModel.findByIdAndDelete(id).exec();

      if (!result) {
        throw new NotFoundException('Post id not found');
      }

      const AllCommentThisPost = await this.commentsService.findCommentById(id);

      if(AllCommentThisPost){
        await this.commentsService.remove(id)
      }

      return {
        message: `Post id #${id} has been deleted`,
      };
      
    } catch (error) {
      throw new Error('Could not delete post');
    }
  }
}
