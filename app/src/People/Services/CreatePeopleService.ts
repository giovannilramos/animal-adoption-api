import { ConflictAlreadyExistsException } from '../../Api/Exception/ConflictAlreadyExistsException';
import { PeopleDto } from '../Dto/PeopleDto';
import { IPeopleStorage } from '../Storage/IPeopleStorage';
import { CreatePeopleTransformer } from '../Transformer/CreatePeopleTransformer';

export class CreatePeopleService {
  constructor(private readonly storage: IPeopleStorage, private readonly transformer: CreatePeopleTransformer) {}

  public async invoke(dto: PeopleDto): Promise<PeopleDto> {
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
