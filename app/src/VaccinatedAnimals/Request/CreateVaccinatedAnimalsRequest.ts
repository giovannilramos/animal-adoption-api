import { Expose } from 'class-transformer';
import { IsNotEmpty, IsUUID } from 'class-validator';

export class CreateVaccinatedAnimalsRequest {
  @IsNotEmpty()
  @IsUUID()
  @Expose()
  public uuid_animals: string;

  @IsNotEmpty()
  @IsUUID()
  @Expose()
  public uuid_vaccines: string;

  @IsNotEmpty()
  @Expose()
  public vaccination_date: Date;
}
