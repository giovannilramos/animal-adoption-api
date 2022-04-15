import {Expose} from "class-transformer";
import {IsEmail, IsNotEmpty, IsUUID} from "class-validator";

export class UpdateUserByIdRequest {
    @IsNotEmpty()
    @IsUUID()
    @Expose()
    public id: string;

    @IsNotEmpty()
    @Expose()
    public name: string;

    @IsNotEmpty()
    @IsEmail()
    @Expose()
    public email: string;

}
