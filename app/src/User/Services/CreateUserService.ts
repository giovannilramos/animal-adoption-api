import { IUserStorage } from '../Storage/IUserStorage';
import { UserDto } from '../Dto/UserDto';
import { CreateUserTransformer } from '../Transformer/CreateUserTransformer';
import { ConflictAlreadyExistsException } from '../../Api/Exception/ConflictAlreadyExistsException';
export class CreateUserService {
  constructor(private readonly storage: IUserStorage, private transformer: CreateUserTransformer) {}

  public async invoke(dto: UserDto): Promise<UserDto> {
    const email = await this.storage.findByEmail(dto.email);
    if (email) {
      throw new ConflictAlreadyExistsException();
    }
    const entity = await this.transformer.toEntity(dto);

    return await this.storage.save(entity);
  }
}
