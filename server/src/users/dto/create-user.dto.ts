import { IsString , IsNotEmpty } from 'class-validator';

export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    readonly username : string;
    @IsNotEmpty()
    @IsString()
    readonly firstName : string;
    @IsNotEmpty()
    @IsString()
    readonly lastName : string;
    @IsNotEmpty()
    @IsString()
    readonly dateOfBirth : string;
}
