import { IApiTransformer } from '../../Api/Transformers/IApiTransformer';
import { IDatabaseTransformer } from '../../Api/Transformers/IDatabaseTransformer';
import { VaccinatedAnimalsDto } from '../Dto/VaccinatedAnimalsDto';
import { VaccinatedAnimalsEntity } from '../Storage/Entity/VaccinatedAnimalsEntity';
import { ClassValidator } from '../../Api/Utils/ClassValidator';
import { GetAllVaccinatedAnimalsRequest } from '../Request/GetAllVaccinatedAnimalsRequest';
import { VaccinatedAnimalsResponse } from '../Response/VaccinatedAnimalsResponse';

export class GetAllVaccinatedAnimalsTransformer implements IApiTransformer<VaccinatedAnimalsDto, VaccinatedAnimalsResponse>, IDatabaseTransformer<VaccinatedAnimalsDto, VaccinatedAnimalsEntity> {
  public async toEntity(dto: VaccinatedAnimalsDto): Promise<VaccinatedAnimalsEntity> {
    throw new Error('Method not implemented.');
  }

  public async fromApi(object: any, headers?: any): Promise<VaccinatedAnimalsDto> {
    const requestObject = await ClassValidator.transformerToModel(GetAllVaccinatedAnimalsRequest, object);

    await ClassValidator.validateInput(requestObject);
    return {
      vaccination_date: requestObject?.vaccination_date || null,
    };
  }

  public async toDto(entity?: VaccinatedAnimalsEntity[]): Promise<VaccinatedAnimalsDto[]> {
    return entity.map((el) => {
      return {
        uuid: el.uuid,
        uuid_animals: el.uuid_animals,
        vaccination_date: el.vaccination_date,
        uuid_vaccines: el.uuid_vaccines,
      };
    });
  }

  public async toApi(dto: VaccinatedAnimalsDto[]): Promise<VaccinatedAnimalsResponse[]> {
    return dto.map((el) => {
      return {
        uuid: el.uuid,
        uuid_animals: el.uuid_animals,
        vaccination_date: el.vaccination_date,
        uuid_vaccines: el.uuid_vaccines,
      };
    });
  }
}
