import { IAnimalStorage } from '../Storage/IAnimalStorage';
import { AnimalDto } from '../Dto/AnimalDto';
import { GetAllAnimalTransformer } from '../Transformer/GetAllAnimalTransformer';

export class GetAllAnimalService {
  constructor(private readonly storage: IAnimalStorage, private readonly transformer: GetAllAnimalTransformer) {}

  public async invoke(): Promise<AnimalDto[]> {
    const entity = await this.storage.findAll();

    return await this.transformer.toDto(entity);
  }
}
