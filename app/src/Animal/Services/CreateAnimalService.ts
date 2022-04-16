import { AnimalDto } from '../Dto/AnimalDto';
import { IAnimalStorage } from '../Storage/IAnimalStorage';
import { CreateAnimalTransformer } from '../Transformer/CreateAnimalTransformer';

export class CreateAnimalService {
  constructor(private readonly storage: IAnimalStorage, private readonly transformer: CreateAnimalTransformer) {}

  public async invoke(dto: AnimalDto): Promise<AnimalDto> {
    const entity = await this.transformer.toEntity(dto);

    await this.storage.save(entity);

    return Promise.resolve(dto);
  }
}
