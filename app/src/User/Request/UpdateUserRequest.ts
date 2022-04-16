import { Expose } from 'class-transformer';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class UpdateUserRequest {
  @IsNotEmpty()
  @Expose()
  public name: string;

  @IsNotEmpty()
  @IsEmail()
  @Expose()
  public email: string;
}
