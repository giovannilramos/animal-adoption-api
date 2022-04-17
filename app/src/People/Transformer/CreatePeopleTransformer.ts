import { v4 as uuidv4 } from 'uuid';
import { IApiTransformer } from '../../Api/Transformers/IApiTransformer';
import { IDatabaseTransformer } from '../../Api/Transformers/IDatabaseTransformer';
import { ClassValidator } from '../../Api/Utils/ClassValidator';
import { PeopleDto } from '../Dto/PeopleDto';
import { CreatePeopleRequest } from '../Request/CreatePeopleRequest';
import { PeopleEntity } from '../Storage/Entity/PeopleEntity';

export class CreatePeopleTransformer implements IApiTransformer<PeopleDto, any>, IDatabaseTransformer<PeopleDto, PeopleEntity> {
  public async toApi(dto: PeopleDto): Promise<any> {
    throw new Error('Method implementation');
  }

  public async toDto(dto: PeopleDto | PeopleDto[], entity: PeopleEntity | PeopleEntity[]): Promise<PeopleDto | PeopleDto[]> {
    throw new Error('Method not implemented.');
  }

  public async fromApi(object: any, headers?: any): Promise<PeopleDto> {
    const requestObject = await ClassValidator.transformerToModel(CreatePeopleRequest, object);

    await ClassValidator.validateInput(requestObject);
    return {
      uuid: uuidv4(),
      name: requestObject.name,
      cpf: requestObject.cpf,
      rg: requestObject.rg,
      city: requestObject.city,
      district: requestObject.district,
      street: requestObject.street,
      country: requestObject.country,
      number: requestObject.number,
      birth_date: requestObject.birth_date,
    };
  }

  public async toEntity(dto: PeopleDto, entity?: PeopleEntity): Promise<PeopleEntity> {
    return {
      uuid: dto.uuid,
      name: dto.name,
      cpf: dto.cpf,
      rg: dto.rg,
      city: dto.city,
      district: dto.district,
      street: dto.street,
      country: dto.country,
      number: dto.number,
      birth_date: dto.birth_date,
    };
  }
}
