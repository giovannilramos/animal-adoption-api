import { IApiTransformer } from '../../Api/Transformers/IApiTransformer';
import { IDatabaseTransformer } from '../../Api/Transformers/IDatabaseTransformer';
import { AdoptionDataDto } from '../Dto/AdoptionDataDto';
import { AdoptionDataEntity } from '../Storage/Entity/AdoptionDataEntity';
import { ClassValidator } from '../../Api/Utils/ClassValidator';
import { AdoptionDataResponse } from '../Response/AdoptionDataResponse';
import { GetAllAdoptionDataRequest } from '../Request/GetAllAdoptionDataRequest';

export class GetAllAdoptionDataTransformer implements IApiTransformer<AdoptionDataDto, AdoptionDataResponse>, IDatabaseTransformer<AdoptionDataDto, AdoptionDataEntity> {
  public async toEntity(dto: AdoptionDataDto): Promise<AdoptionDataEntity> {
    throw new Error('Method not implemented.');
  }

  public async fromApi(object: any, headers?: any): Promise<AdoptionDataDto> {
    const requestObject = await ClassValidator.transformerToModel(GetAllAdoptionDataRequest, object);

    await ClassValidator.validateInput(requestObject);
    return {
      adoption_date: requestObject?.adoption_date || null,
    };
  }

  public async toDto(entity?: AdoptionDataEntity[]): Promise<AdoptionDataDto[]> {
    return entity.map((el) => {
      return {
        uuid: el.uuid,
        uuid_animals: el.uuid_animals,
        adoption_date: el.adoption_date,
        uuid_people: el.uuid_people,
      };
    });
  }

  public async toApi(dto: AdoptionDataDto[]): Promise<AdoptionDataResponse[]> {
    return dto.map((el) => {
      return {
        uuid: el.uuid,
        uuid_animals: el.uuid_animals,
        adoption_date: el.adoption_date,
        uuid_people: el.uuid_people,
      };
    });
  }
}
