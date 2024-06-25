import { Prop , Schema , SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type UsersDocument = Users & Document;

@Schema()
export class Users {
    @Prop({required : true , unique : true})
    username : string;

    @Prop({required : true})
    firstName : string;

    @Prop({required : true})
    lastName : string;

    @Prop({required : true})
    dateOfBirth : string;
}

export const UsersSchema = SchemaFactory.createForClass(Users);