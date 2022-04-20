import { v4 as uuidv4 } from 'uuid';
import { IApiTransformer } from '../../Api/Transformers/IApiTransformer';
import { IDatabaseTransformer } from '../../Api/Transformers/IDatabaseTransformer';
import { ClassValidator } from '../../Api/Utils/ClassValidator';
import { VaccinatedAnimalsDto } from '../Dto/VaccinatedAnimalsDto';
import { CreateVaccinatedAnimalsRequest } from '../Request/CreateVaccinatedAnimalsRequest';
import { VaccinatedAnimalsEntity } from '../Storage/Entity/VaccinatedAnimalsEntity';
import { VaccineEntity } from '../../Vaccine/Storage/Entity/VaccineEntity';

export class CreateVaccinatedAnimalsTransformer implements IApiTransformer<VaccinatedAnimalsDto, any>, IDatabaseTransformer<VaccinatedAnimalsDto, VaccinatedAnimalsEntity> {
  public async toApi(dto: VaccinatedAnimalsDto): Promise<any> {
    throw new Error('Method implementation');
  }

  public async toDto(dto: VaccinatedAnimalsDto | VaccinatedAnimalsDto[], entity: VaccinatedAnimalsEntity | VaccinatedAnimalsEntity[]): Promise<VaccinatedAnimalsDto | VaccinatedAnimalsDto[]> {
    throw new Error('Method not implemented.');
  }

  public async fromApi(object: any, headers?: any): Promise<VaccinatedAnimalsDto> {
    const requestObject = await ClassValidator.transformerToModel(CreateVaccinatedAnimalsRequest, object);

    await ClassValidator.validateInput(requestObject);
    return {
      uuid: uuidv4(),
      vaccination_date: requestObject.vaccination_date,
      uuid_animals: requestObject.uuid_animals,
      uuid_vaccines: requestObject.uuid_vaccines,
    };
  }

  public async toEntity(dto: VaccinatedAnimalsDto, entity?: VaccineEntity): Promise<VaccinatedAnimalsEntity> {
    return {
      uuid: dto.uuid,
      vaccination_date: dto.vaccination_date,
      uuid_animals: dto.uuid_animals,
      uuid_vaccines: entity.uuid,
    };
  }
}
