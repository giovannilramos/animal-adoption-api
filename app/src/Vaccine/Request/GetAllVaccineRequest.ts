import { Expose } from 'class-transformer';

export class GetAllVaccineRequest {
  @Expose()
  public name: string;
}
