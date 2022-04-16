import { IApiTransformer } from '../../Api/Transformers/IApiTransformer';
import { ClassValidator } from '../../Api/Utils/ClassValidator';
import { UserDto } from '../Dto/UserDto';
import { GetUserResponse } from '../Response/GetUserResponse';
import { UserEntity } from '../Storage/Entity/UserEntity';
import { UpdateUserByIdRequest } from '../Request/UpdateUserByIdRequest';

export class UpdateUserByIdTransformer implements IApiTransformer<UserDto, GetUserResponse> {
  public async fromApi(object: any, headers?: any): Promise<UserDto> {
    const requestObject = <UpdateUserByIdRequest>await ClassValidator.transformerToModel(UpdateUserByIdRequest, object);
    await ClassValidator.validateInput(requestObject);

    return Promise.resolve({
      uuid: requestObject.id,
      name: requestObject.name,
      email: requestObject.email,
    });
  }

  public async toDto(dto: UserDto, entity: UserEntity): Promise<UserDto> {
    throw new Error('Method not implemented');
  }

  public async toEntity(dto: UserDto): Promise<UserEntity> {
    return {
      uuid: dto.uuid,
      name: dto.name,
      email: dto.email,
    };
  }

  public async toApi(dto: UserDto): Promise<GetUserResponse> {
    return {
      uuid: dto.uuid,
      name: dto.name,
      email: dto.email,
    };
  }
}
