import { IAnimalStorage } from '../Storage/IAnimalStorage';
import { AnimalDto } from '../Dto/AnimalDto';
import { GetAllAnimalTransformer } from '../Transformer/GetAllAnimalTransformer';

export class GetAllAnimalService {
  constructor(private readonly storage: IAnimalStorage, private readonly transformer: GetAllAnimalTransformer) {}

  public async invoke(dto?: AnimalDto): Promise<AnimalDto[]> {
    const entity = await this.storage.findByName(dto.name);

    return await this.transformer.toDto(entity);
  }
}
