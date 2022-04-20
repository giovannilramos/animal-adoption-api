import { Expose } from 'class-transformer';
import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class GetAllAnimalsByPersonCpfRequest {
  @IsNotEmpty()
  @MaxLength(11)
  @MinLength(11)
  @Expose()
  public cpf_person: string;
}
