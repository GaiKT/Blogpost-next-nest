import { IsString , IsMongoId ,IsNotEmpty } from 'class-validator';

export class CreatePostDto {

    @IsNotEmpty() // check not null
    @IsString() //check string
    readonly title : string;

    @IsNotEmpty() // check not null
    @IsString() //check string
    readonly discription : string;

    @IsNotEmpty() // check not null
    @IsString() //check string
    readonly community : string;

    @IsNotEmpty() // check not null
    @IsMongoId() //check format string monggobd
    @IsString() //check string
    readonly user_id : string;
}
