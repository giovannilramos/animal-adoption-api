import { v4 as uuidv4 } from 'uuid';
import { IApiTransformer } from '../../Api/Transformers/IApiTransformer';
import { IDatabaseTransformer } from '../../Api/Transformers/IDatabaseTransformer';
import { ClassValidator } from '../../Api/Utils/ClassValidator';
import { AdoptionDataDto } from '../Dto/AdoptionDataDto';
import { CreateAdoptionDataRequest } from '../Request/CreateAdoptionDataRequest';
import { AdoptionDataEntity } from '../Storage/Entity/AdoptionDataEntity';
import { PeopleEntity } from '../../People/Storage/Entity/PeopleEntity';

export class CreateAdoptionDataTransformer implements IApiTransformer<AdoptionDataDto, any>, IDatabaseTransformer<AdoptionDataDto, AdoptionDataEntity> {
  public async toApi(dto: AdoptionDataDto): Promise<any> {
    throw new Error('Method implementation');
  }

  public async toDto(dto: AdoptionDataDto | AdoptionDataDto[], entity: AdoptionDataEntity | AdoptionDataEntity[]): Promise<AdoptionDataDto | AdoptionDataDto[]> {
    throw new Error('Method not implemented.');
  }

  public async fromApi(object: any, headers?: any): Promise<AdoptionDataDto> {
    const requestObject = await ClassValidator.transformerToModel(CreateAdoptionDataRequest, object);

    await ClassValidator.validateInput(requestObject);
    return {
      uuid: uuidv4(),
      adoption_date: new Date(),
      uuid_animals: requestObject.uuid_animals,
      cpf_people: requestObject.cpf_person,
    };
  }

  public async toEntity(dto: AdoptionDataDto, entity?: PeopleEntity): Promise<AdoptionDataEntity> {
    return {
      uuid: dto.uuid,
      adoption_date: dto.adoption_date,
      uuid_animals: dto.uuid_animals,
      uuid_people: entity.uuid,
    };
  }
}
