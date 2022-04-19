import { IApiTransformer } from '../../Api/Transformers/IApiTransformer';
import { IDatabaseTransformer } from '../../Api/Transformers/IDatabaseTransformer';
import { PeopleResponse } from '../Response/PeopleResponse';
import { ClassValidator } from '../../Api/Utils/ClassValidator';
import { PeopleDto } from '../Dto/PeopleDto';
import { PeopleEntity } from '../Storage/Entity/PeopleEntity';
import { UpdatePeopleRequest } from '../Request/UpdatePeopleRequest';

export class UpdatePeopleTransformer implements IApiTransformer<PeopleDto, PeopleResponse>, IDatabaseTransformer<PeopleDto, PeopleEntity> {
  public async toEntity(dto: PeopleDto, entity?: PeopleEntity): Promise<PeopleEntity> {
    return {
      ...entity,
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
      updated_at: new Date(),
    };
  }

  public async fromApi(object: any, headers?: any): Promise<PeopleDto> {
    const requestObject = await ClassValidator.transformerToModel(UpdatePeopleRequest, object);

    await ClassValidator.validateInput(requestObject);
    return {
      uuid: requestObject.uuid,
      cpf: requestObject.cpf,
      name: requestObject.name,
      rg: requestObject.rg,
      city: requestObject.city,
      district: requestObject.district,
      street: requestObject.street,
      country: requestObject.country,
      number: requestObject.number,
      birth_date: requestObject.birth_date,
    };
  }

  public async toDto(entity?: PeopleEntity): Promise<PeopleDto> {
    throw new Error('Method not implemented');
  }

  public async toApi(dto: PeopleDto): Promise<PeopleResponse> {
    throw new Error('Method not implemented');
  }
}
