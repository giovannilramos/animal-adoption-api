import { Expose } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';

export default class AuthRequest {
    @IsNotEmpty({ message: 'Field username is required' })
    @Expose()
    public username: string;

    @IsNotEmpty({ message: 'Field password is required' })
    @Expose()
    public password: string;
}
