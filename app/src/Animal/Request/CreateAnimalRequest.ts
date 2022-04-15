import { Expose } from 'class-transformer';
import { IsDate, IsNotEmpty, Max, Min } from 'class-validator';

export class CreateAnimalRequest {
  @IsNotEmpty()
  @Expose()
  public name: string;

  @IsNotEmpty()
  @Min(11)
  @Max(11)
  @Expose()
  public cpf: string;

  @IsNotEmpty()
  @Min(9)
  @Max(9)
  @Expose()
  public rg: string;

  @IsNotEmpty()
  @IsDate()
  @Expose()
  public birth_date: Date;

  @IsNotEmpty()
  @Min(8)
  @Max(8)
  @Expose()
  public cep: string;

  @IsNotEmpty()
  @Expose()
  public country: string;

  @IsNotEmpty()
  @Expose()
  public number: string;

}
