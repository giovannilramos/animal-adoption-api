import { IApiTransformer } from '../../Api/Transformers/IApiTransformer';
import { IDatabaseTransformer } from '../../Api/Transformers/IDatabaseTransformer';
import { ClassValidator } from '../../Api/Utils/ClassValidator';
import { GetVaccineRequest } from '../Request/GetVaccineRequest';
import { VaccineDto } from '../Dto/VaccineDto';
import { VaccineResponse } from '../Response/VaccineResponse';
import { VaccineEntity } from '../Storage/Entity/VaccineEntity';

export class GetVaccineTransformer implements IApiTransformer<VaccineDto, VaccineResponse>, IDatabaseTransformer<VaccineDto, VaccineEntity> {
  public async toEntity(dto: VaccineDto): Promise<VaccineEntity> {
    throw new Error('Method not implemented.');
  }

  public async fromApi(object: any, headers?: any): Promise<VaccineDto> {
    const requestObject = await ClassValidator.transformerToModel(GetVaccineRequest, object);

    await ClassValidator.validateInput(requestObject);
    return {
      uuid: requestObject.uuid,
    };
  }

  public async toDto(entity?: VaccineEntity): Promise<VaccineDto> {
    return {
      uuid: entity.uuid,
      name: entity.name,
    };
  }

  public async toApi(dto: VaccineDto): Promise<VaccineResponse> {
    return {
      uuid: dto.uuid,
      name: dto.name,
    };
  }
}
