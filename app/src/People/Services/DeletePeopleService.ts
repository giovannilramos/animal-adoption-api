import {PeopleDto} from '../Dto/PeopleDto';
import {IPeopleStorage} from '../Storage/IPeopleStorage';
import {ResourceNotFoundException} from "../../Api/Exception/ResourceNotFoundException";

export class DeletePeopleService {
  constructor(private readonly storage: IPeopleStorage) {}

  public async invoke(dto: PeopleDto): Promise<PeopleDto> {
    const person = await this.storage.findById(dto.uuid);

    if (!person) {
      throw new ResourceNotFoundException('Person not found');
    }

    await this.storage.delete(dto.uuid);

    return Promise.resolve(dto);
  }
}
