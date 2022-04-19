import { ConflictAlreadyExistsException } from '../../Api/Exception/ConflictAlreadyExistsException';
import { PeopleDto } from '../Dto/PeopleDto';
import { IPeopleStorage } from '../Storage/IPeopleStorage';

export class InactivatePeopleService {
  constructor(private readonly storage: IPeopleStorage) {}

  public async invoke(dto: PeopleDto): Promise<PeopleDto> {
    const people = await this.storage.findById(dto.uuid);

    if (!people.active) {
      throw new ConflictAlreadyExistsException(null, 'This person is already inactive');
    }

    await this.storage.updateStatus(people.uuid, false);

    return Promise.resolve(dto);
  }
}
