import { IsEmail, IsString, MinLength } from "class-validator";

export class CreateuUserDto {
    @IsEmail()
    email:string;
    @IsString()
    name:string;
    @MinLength(6)
    password:string;
}
