import { IApiTransformer } from '../../Api/Transformers/IApiTransformer';
import { IDatabaseTransformer } from '../../Api/Transformers/IDatabaseTransformer';
import { VaccinatedAnimalsDto } from '../Dto/VaccinatedAnimalsDto';
import { VaccinatedAnimalsEntity } from '../Storage/Entity/VaccinatedAnimalsEntity';
import { ClassValidator } from '../../Api/Utils/ClassValidator';
import { VaccinatedAnimalsResponse } from '../Response/VaccinatedAnimalsResponse';
import { GetAllVaccinesByAnimalIdRequest } from '../Request/GetAllVaccinesByAnimalIdRequest';

export class GetAllVaccinesByAnimalIdTransformer implements IApiTransformer<VaccinatedAnimalsDto, VaccinatedAnimalsResponse>, IDatabaseTransformer<VaccinatedAnimalsDto, VaccinatedAnimalsEntity> {
  public async toEntity(dto: VaccinatedAnimalsDto): Promise<VaccinatedAnimalsEntity> {
    throw new Error('Method not implemented.');
  }

  public async fromApi(object: any, headers?: any): Promise<VaccinatedAnimalsDto> {
    const requestObject = await ClassValidator.transformerToModel(GetAllVaccinesByAnimalIdRequest, object);

    await ClassValidator.validateInput(requestObject);
    return {
      uuid_animals: requestObject.uuid_animals,
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
        vaccination_date: el.vaccination_date,
        uuid_vaccines: el.uuid_vaccines,
      };
    });
  }
}
