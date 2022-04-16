import { IUserStorage } from '../Storage/IUserStorage';
import { UserDto } from '../Dto/UserDto';
import { ResourceNotFoundException } from '../../Api/Exception/ResourceNotFoundException';

export class GetUserService {
  constructor(private readonly storage: IUserStorage) {}

  public async invoke(dto: UserDto): Promise<UserDto> {
    const user = await this.storage.findByUuid(dto.uuid);
    if (!user) {
      throw new ResourceNotFoundException('User not found');
    }
    return user;
  }
}
