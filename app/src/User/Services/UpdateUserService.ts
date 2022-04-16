import { ResourceNotFoundException } from '../../Api/Exception/ResourceNotFoundException';
import { UserDto } from '../Dto/UserDto';
import { IUserStorage } from '../Storage/IUserStorage';

export class UpdateUserService {
  constructor(private readonly storage: IUserStorage) {}

  public async invoke(dto: UserDto): Promise<UserDto> {
    const entity = await this.storage.findByUuid(dto.uuid);
    if (!entity) {
      throw new ResourceNotFoundException('User not found');
    }
    entity.name = dto.name;
    entity.email = dto.email;
    await this.storage.update(entity);
    return Promise.resolve(dto);
  }
}
