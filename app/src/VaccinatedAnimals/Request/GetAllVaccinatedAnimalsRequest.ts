import { Expose } from 'class-transformer';

export class GetAllVaccinatedAnimalsRequest {
  @Expose()
  public vaccination_date: Date;
}
