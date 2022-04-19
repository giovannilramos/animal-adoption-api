import { IApiTransformer } from '../../Api/Transformers/IApiTransformer';
import { IDatabaseTransformer } from '../../Api/Transformers/IDatabaseTransformer';
import { PeopleResponse } from '../Response/PeopleResponse';
import { ClassValidator } from '../../Api/Utils/ClassValidator';
import { GetPeopleRequest } from '../Request/GetPeopleRequest';
import { PeopleDto } from '../Dto/PeopleDto';
import { PeopleEntity } from '../Storage/Entity/PeopleEntity';

export class GetPeopleTransformer implements IApiTransformer<PeopleDto, PeopleResponse>, IDatabaseTransformer<PeopleDto, PeopleEntity> {
  public async toEntity(dto: PeopleDto): Promise<PeopleEntity> {
    throw new Error('Method not implemented.');
  }

  public async fromApi(object: any, headers?: any): Promise<PeopleDto> {
    const requestObject = await ClassValidator.transformerToModel(GetPeopleRequest, object);

    await ClassValidator.validateInput(requestObject);
    return {
      uuid: requestObject.uuid,
    };
  }

  public async toDto(entity?: PeopleEntity): Promise<PeopleDto> {
    return {
      uuid: entity.uuid,
      cpf: entity.cpf,
      name: entity.name,
      rg: entity.rg,
      city: entity.city,
      district: entity.district,
      street: entity.street,
      country: entity.country,
      number: entity.number,
      birth_date: entity.birth_date,
      active: entity.active,
    };
  }

  public async toApi(dto: PeopleDto): Promise<PeopleResponse> {
    return {
      uuid: dto.uuid,
      cpf: dto.cpf,
      name: dto.name,
      rg: dto.rg,
      city: dto.city,
      district: dto.district,
      street: dto.street,
      country: dto.country,
      number: dto.number,
      birth_date: dto.birth_date,
      active: dto.active,
    };
  }
}
