import { PeopleDto } from '../Dto/PeopleDto';
import { IPeopleStorage } from '../Storage/IPeopleStorage';
import { ResourceNotFoundException } from '../../Api/Exception/ResourceNotFoundException';
import { ConflictAlreadyExistsException } from '../../Api/Exception/ConflictAlreadyExistsException';
import { UpdatePeopleTransformer } from '../Transformer/UpdatePeopleTransformer';

export class UpdatePeopleService {
  constructor(private readonly storage: IPeopleStorage, private readonly transformer: UpdatePeopleTransformer) {}

  public async invoke(dto: PeopleDto): Promise<PeopleDto> {
    let entity = await this.storage.findById(dto.uuid);
    if (!entity) {
      throw new ResourceNotFoundException('Person not found');
    }

    if (!entity.active) {
      throw new ConflictAlreadyExistsException(null, 'Person inactive, please activate this person first');
    }
    entity = await this.transformer.toEntity(dto, entity);

    await this.storage.update(entity);
    return Promise.resolve(dto);
  }
}
