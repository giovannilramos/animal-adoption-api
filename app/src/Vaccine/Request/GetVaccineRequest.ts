import { Expose } from 'class-transformer';
import { IsNotEmpty, IsUUID } from 'class-validator';

export class GetVaccineRequest {
  @IsNotEmpty()
  @IsUUID()
  @Expose()
  public uuid: string;
}
