import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CommentsService } from './comments.service';
import { CommentsController } from './comments.controller';
import { CommentsSchema } from './schemas/comments.schemas';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Comments', schema: CommentsSchema }])
  ],
  providers: [CommentsService],
  controllers: [CommentsController],
  exports: [CommentsService, MongooseModule]
})
export class CommentsModule {}
