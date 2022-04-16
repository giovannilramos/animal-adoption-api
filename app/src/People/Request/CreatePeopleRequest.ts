import { Expose } from 'class-transformer';
import { IsDate, IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class CreatePeopleRequest {
  @IsNotEmpty()
  @Expose()
  public name: string;

  @IsNotEmpty()
  @MaxLength(11)
  @MinLength(11)
  @Expose()
  public cpf: string;

  @IsNotEmpty()
  @MaxLength(9)
  @MinLength(9)
  @Expose()
  public rg: string;

  @IsNotEmpty()
  @Expose()
  public birth_date: Date;

  @IsNotEmpty()
  @MaxLength(8)
  @MinLength(8)
  @Expose()
  public cep: string;

  @IsNotEmpty()
  @Expose()
  public country: string;

  @IsNotEmpty()
  @Expose()
  public number: string;
}
