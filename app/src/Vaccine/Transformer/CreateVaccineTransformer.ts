import { v4 as uuidv4 } from 'uuid';
import { IApiTransformer } from '../../Api/Transformers/IApiTransformer';
import { IDatabaseTransformer } from '../../Api/Transformers/IDatabaseTransformer';
import { ClassValidator } from '../../Api/Utils/ClassValidator';
import { VaccineDto } from '../Dto/VaccineDto';
import { CreateVaccineRequest } from '../Request/CreateVaccineRequest';
import { VaccineEntity } from '../Storage/Entity/VaccineEntity';

export class CreateVaccineTransformer implements IApiTransformer<VaccineDto, any>, IDatabaseTransformer<VaccineDto, VaccineEntity> {
  public async toApi(dto: VaccineDto): Promise<any> {
    throw new Error('Method implementation');
  }

  public async toDto(dto: VaccineDto | VaccineDto[], entity: VaccineEntity | VaccineEntity[]): Promise<VaccineDto | VaccineDto[]> {
    throw new Error('Method not implemented.');
  }

  public async fromApi(object: any, headers?: any): Promise<VaccineDto> {
    const requestObject = await ClassValidator.transformerToModel(CreateVaccineRequest, object);

    await ClassValidator.validateInput(requestObject);
    return {
      uuid: uuidv4(),
      name: requestObject.name,
    };
  }

  public async toEntity(dto: VaccineDto, entity?: VaccineEntity): Promise<VaccineEntity> {
    return {
      uuid: dto.uuid,
      name: dto.name,
    };
  }
}
