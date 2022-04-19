import { ConflictAlreadyExistsException } from '../../Api/Exception/ConflictAlreadyExistsException';
import { PeopleDto } from '../Dto/PeopleDto';
import { IPeopleStorage } from '../Storage/IPeopleStorage';

export class ActivatePeopleService {
  constructor(private readonly storage: IPeopleStorage) {}

  public async invoke(dto: PeopleDto): Promise<PeopleDto> {
    const people = await this.storage.findById(dto.uuid);

    if (people.active) {
      throw new ConflictAlreadyExistsException(null, 'This person is already active');
    }

    await this.storage.updateStatus(people.uuid, true);

    return Promise.resolve(dto);
  }
}
