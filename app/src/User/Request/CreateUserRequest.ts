import { Expose } from 'class-transformer';
import {IsEmail, IsNotEmpty, Length} from "class-validator";

export class CreateUserRequest {

    @IsNotEmpty()
    @Expose()
    public name: string;

    @IsNotEmpty()
    @Expose()
    @IsEmail()
    public email: string;

    @IsNotEmpty()
    @Length(6, 16)
    @Expose()
    public password: string;

}
