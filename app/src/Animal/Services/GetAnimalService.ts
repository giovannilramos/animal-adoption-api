import { IAnimalStorage } from '../Storage/IAnimalStorage';
import { AnimalDto } from '../Dto/AnimalDto';
import { GetAnimalTransformer } from '../Transformer/GetAnimalTransformer';

export class GetAnimalService {
  constructor(private readonly storage: IAnimalStorage, private readonly transformer: GetAnimalTransformer) {}

  public async invoke(dto: AnimalDto): Promise<AnimalDto> {
    const entity = await this.storage.findById(dto.uuid);

    return await this.transformer.toDto(entity);
  }
}
