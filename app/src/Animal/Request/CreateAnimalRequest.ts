import { Expose } from 'class-transformer';
import { IsEnum, IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class CreateAnimalRequest {
  @IsNotEmpty()
  @Expose()
  public name: string;

  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(1)
  @IsEnum(['M', 'F'])
  @Expose()
  public sex: string;

  @IsNotEmpty()
  @Expose()
  public age: number;
}
