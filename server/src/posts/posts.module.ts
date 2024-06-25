import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { Posts , PostsSchema } from './schemas/post.schemas';
import { UsersModule } from 'src/users/users.module';
import { CommentsModule } from 'src/comments/comments.module';

@Module({
  imports : [
    MongooseModule.forFeature([
      {
        name: Posts.name ,
        schema: PostsSchema
      },
    ]),
    UsersModule,
    CommentsModule,
  ],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}
