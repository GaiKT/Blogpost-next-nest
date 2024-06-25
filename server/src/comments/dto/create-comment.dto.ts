import { IsString , IsMongoId ,IsNotEmpty } from 'class-validator';

export class CreateCommentDto {

    @IsNotEmpty() // check not null
    @IsMongoId() //check format string monggobd
    @IsString() //check string
    readonly post_id : string;

    @IsNotEmpty() // check not null
    @IsMongoId() //check format string monggobd
    @IsString() //check string
    readonly user_id : string;

    @IsNotEmpty() // check not null
    @IsString() //check string
    readonly comment : string;
}
