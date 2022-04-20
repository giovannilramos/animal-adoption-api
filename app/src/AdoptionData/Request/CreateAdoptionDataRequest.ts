import { Expose } from 'class-transformer';
import { IsNotEmpty, IsUUID, MaxLength, MinLength } from 'class-validator';

export class CreateAdoptionDataRequest {
  @IsNotEmpty()
  @IsUUID()
  @Expose()
  public uuid_animals: string;

  @IsNotEmpty()
  @MaxLength(11)
  @MinLength(11)
  @Expose()
  public cpf_person: string;

  @IsNotEmpty()
  @Expose()
  public adoption_date: Date;
}
