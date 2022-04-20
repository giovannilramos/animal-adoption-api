import { IApiTransformer } from '../../Api/Transformers/IApiTransformer';
import { IDatabaseTransformer } from '../../Api/Transformers/IDatabaseTransformer';
import { VaccineDto } from '../Dto/VaccineDto';
import { VaccineEntity } from '../Storage/Entity/VaccineEntity';
import { ClassValidator } from '../../Api/Utils/ClassValidator';
import { GetAllVaccineRequest } from '../Request/GetAllVaccineRequest';
import { VaccineResponse } from '../Response/VaccineResponse';

export class GetAllVaccineTransformer implements IApiTransformer<VaccineDto, VaccineResponse>, IDatabaseTransformer<VaccineDto, VaccineEntity> {
  public async toEntity(dto: VaccineDto): Promise<VaccineEntity> {
    throw new Error('Method not implemented.');
  }

  public async fromApi(object: any, headers?: any): Promise<VaccineDto> {
    const requestObject = await ClassValidator.transformerToModel(GetAllVaccineRequest, object);

    await ClassValidator.validateInput(requestObject);
    return {
      name: requestObject?.name || null,
    };
  }

  public async toDto(entity?: VaccineEntity[]): Promise<VaccineDto[]> {
    return entity.map((el) => {
      return {
        uuid: el.uuid,
        name: el.name,
      };
    });
  }

  public async toApi(dto: VaccineDto[]): Promise<VaccineResponse[]> {
    return dto.map((el) => {
      return {
        uuid: el.uuid,
        name: el.name,
      };
    });
  }
}
