import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type CommentsDocument = Comments & Document;

@Schema()
export class Comments {
  @Prop({ type: Types.ObjectId, ref: 'Posts', required: true })
  post_id: Types.ObjectId;

  @Prop({ required: true })
  comment: string;

  @Prop({ type: Types.ObjectId, ref: 'Users', required: true })
  user_id: Types.ObjectId;

  @Prop({ required: true, default: Date.now })
  publishDate: Date;
}

export const CommentsSchema = SchemaFactory.createForClass(Comments);
