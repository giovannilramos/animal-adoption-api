import { Expose } from 'class-transformer';
import { IsNotEmpty, IsUUID } from 'class-validator';

export class GetAllVaccinesByAnimalIdRequest {
  @IsNotEmpty()
  @IsUUID()
  @Expose()
  public uuid_animals: string;
}
