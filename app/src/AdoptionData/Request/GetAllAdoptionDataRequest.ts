import { Expose } from 'class-transformer';

export class GetAllAdoptionDataRequest {
  @Expose()
  public adoption_date: Date;
}
