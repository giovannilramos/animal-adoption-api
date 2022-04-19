import { Expose } from 'class-transformer';

export class GetAllAnimalRequest {
  @Expose()
  public name: string;
}
