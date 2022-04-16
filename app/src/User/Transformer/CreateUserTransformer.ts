import { IApiTransformer } from '../../Api/Transformers/IApiTransformer';
import { ClassValidator } from '../../Api/Utils/ClassValidator';
import { v4 as uuidv4 } from 'uuid';
import { UserDto } from '../Dto/UserDto';
import { CreateUserRequest } from '../Request/CreateUserRequest';
import { IDatabaseTransformer } from '../../Api/Transformers/IDatabaseTransformer';
import { UserEntity } from '../Storage/Entity/UserEntity';
import Hash from '../../Api/Utils/Hash';

export class CreateUserTransformer implements IApiTransformer<UserDto, any>, IDatabaseTransformer<UserDto, UserEntity> {
  public async fromApi(object: any, headers?: any): Promise<UserDto> {
    const requestObject = <CreateUserRequest>await ClassValidator.transformerToModel(CreateUserRequest, object);

    await ClassValidator.validateInput(requestObject);

    return {
      uuid: uuidv4(),
      email: requestObject.email,
      name: requestObject.name,
      password: requestObject.password,
    };
  }

  public async toApi(dto: UserDto): Promise<any> {
    throw new Error('Method not implemented');
  }

  public async toDto(dto: UserDto, entity: UserEntity): Promise<UserDto> {
    throw new Error('Method not implemented');
  }

  public async toEntity(dto: UserDto): Promise<UserEntity> {
    return {
      uuid: dto.uuid,
      name: dto.name,
      email: dto.email,
      password: await Hash.generateHash(dto.password),
      active: false,
    };
  }
}
