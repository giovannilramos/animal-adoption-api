import { Expose } from 'class-transformer';

export class GetAllPeopleRequest {
  @Expose()
  public name: string;
}
