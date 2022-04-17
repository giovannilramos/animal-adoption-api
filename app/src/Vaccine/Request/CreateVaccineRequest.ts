import { Expose } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';

export class CreateVaccineRequest {
  @IsNotEmpty()
  @Expose()
  public name: string;
}
