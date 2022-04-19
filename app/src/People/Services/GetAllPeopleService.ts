import { IPeopleStorage } from '../Storage/IPeopleStorage';
import { PeopleDto } from '../Dto/PeopleDto';
import { GetAllPeopleTransformer } from '../Transformer/GetAllPeopleTransformer';

export class GetAllPeopleService {
  constructor(private readonly storage: IPeopleStorage, private readonly transformer: GetAllPeopleTransformer) {}

  public async invoke(dto?: PeopleDto): Promise<PeopleDto[]> {
    const entity = await this.storage.findByName(dto.name);

    return await this.transformer.toDto(entity);
  }
}
