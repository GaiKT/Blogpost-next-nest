import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Users } from 'src/users/schemas/users.schemas';


export type PostsDocument = Posts & Document;

@Schema()
export class Posts {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  discription: string;

  @Prop({ required: true })
  community: string;

  @Prop({ type: Types.ObjectId, ref: Users.name, required: true })
  user_id: Types.ObjectId;

  @Prop({ required: true, default: Date.now })
  publishDate: Date;
  
}

export const PostsSchema = SchemaFactory.createForClass(Posts);

PostsSchema.virtual('comments', {
  ref: 'Comments',
  localField: '_id',
  foreignField: 'post_id',
});

PostsSchema.set('toObject', { virtuals: true });
PostsSchema.set('toJSON', { virtuals: true });
