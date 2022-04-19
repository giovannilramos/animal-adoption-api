import { IApiTransformer } from '../../Api/Transformers/IApiTransformer';
import { IDatabaseTransformer } from '../../Api/Transformers/IDatabaseTransformer';
import { PeopleDto } from '../Dto/PeopleDto';
import { PeopleEntity } from '../Storage/Entity/PeopleEntity';
import { PeopleResponse } from '../Response/PeopleResponse';
import { ClassValidator } from '../../Api/Utils/ClassValidator';
import { GetAllPeopleRequest } from '../Request/GetAllPeopleRequest';

export class GetAllPeopleTransformer implements IApiTransformer<PeopleDto, PeopleResponse>, IDatabaseTransformer<PeopleDto, PeopleEntity> {
  public async toEntity(dto: PeopleDto): Promise<PeopleEntity> {
    throw new Error('Method not implemented.');
  }

  public async fromApi(object: any, headers?: any): Promise<PeopleDto> {
    const requestObject = await ClassValidator.transformerToModel(GetAllPeopleRequest, object);

    await ClassValidator.validateInput(requestObject);
    return {
      name: requestObject?.name || null,
    };
  }

  public async toDto(entity?: PeopleEntity[]): Promise<PeopleDto[]> {
    return entity.map((el) => {
      return {
        uuid: el.uuid,
        cpf: el.cpf,
        name: el.name,
        rg: el.rg,
        city: el.city,
        district: el.district,
        street: el.street,
        country: el.country,
        number: el.number,
        birth_date: el.birth_date,
        active: el.active,
      };
    });
  }

  public async toApi(dto: PeopleDto[]): Promise<PeopleResponse[]> {
    return dto.map((el) => {
      return {
        uuid: el.uuid,
        cpf: el.cpf,
        name: el.name,
        rg: el.rg,
        city: el.city,
        district: el.district,
        street: el.street,
        country: el.country,
        number: el.number,
        birth_date: el.birth_date,
        active: el.active,
      };
    });
  }
}
