import { ConflictAlreadyExistsException } from '../../Api/Exception/ConflictAlreadyExistsException';
import { AnimalDto } from '../Dto/AnimalDto';
import { IAnimalStorage } from '../Storage/IAnimalStorage';
import { CreateAnimalTransformer } from '../Transformer/CreateAnimalTransformer';

export class CreateAnimalService {
  constructor(private readonly storage: IAnimalStorage, private readonly transformer: CreateAnimalTransformer) {}

  public async invoke(dto: AnimalDto): Promise<AnimalDto> {
    const cpfExist = await this.storage.findByCpf(dto.cpf);
    const rgExist = await this.storage.findByRg(dto.rg);

    if (cpfExist || rgExist) {
      throw new ConflictAlreadyExistsException(null, 'Essa pessoa já possui um registro');
    }

    const entity = await this.transformer.toEntity(dto);

    await this.storage.save(entity);

    return Promise.resolve(dto);
  }
}
