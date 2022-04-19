import { PeopleDto } from '../Dto/PeopleDto';
import { IPeopleStorage } from '../Storage/IPeopleStorage';
import { GetPeopleTransformer } from '../Transformer/GetPeopleTransformer';
import { ResourceNotFoundException } from '../../Api/Exception/ResourceNotFoundException';

export class GetPeopleService {
  constructor(private readonly storage: IPeopleStorage, private readonly transformer: GetPeopleTransformer) {}

  public async invoke(dto: PeopleDto): Promise<PeopleDto> {
    const entity = await this.storage.findById(dto.uuid);
    if (!entity) {
      throw new ResourceNotFoundException('Person not found');
    }

    return await this.transformer.toDto(entity);
  }
}
