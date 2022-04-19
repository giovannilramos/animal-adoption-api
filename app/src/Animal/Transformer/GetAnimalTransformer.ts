import { IApiTransformer } from '../../Api/Transformers/IApiTransformer';
import { IDatabaseTransformer } from '../../Api/Transformers/IDatabaseTransformer';
import { AnimalDto } from '../Dto/AnimalDto';
import { AnimalResponse } from '../Response/AnimalResponse';
import { AnimalEntity } from '../Storage/Entity/AnimalEntity';
import { ClassValidator } from '../../Api/Utils/ClassValidator';
import { GetAnimalRequest } from '../Request/GetAnimalRequest';

export class GetAnimalTransformer implements IApiTransformer<AnimalDto, AnimalResponse>, IDatabaseTransformer<AnimalDto, AnimalEntity> {
  public async toEntity(dto: AnimalDto): Promise<AnimalEntity> {
    throw new Error('Method not implemented.');
  }

  public async fromApi(object: any, headers?: any): Promise<AnimalDto> {
    const requestObject = await ClassValidator.transformerToModel(GetAnimalRequest, object);

    await ClassValidator.validateInput(requestObject);
    return {
      uuid: requestObject.uuid,
    };
  }

  public async toDto(entity?: AnimalEntity): Promise<AnimalDto> {
    return {
      uuid: entity.uuid,
      age: entity.age,
      sex: entity.sex,
      name: entity.name,
      species: entity.species,
    };
  }

  public async toApi(dto: AnimalDto): Promise<AnimalResponse> {
    return {
      uuid: dto.uuid,
      age: dto.age,
      sex: dto.sex,
      name: dto.name,
      species: dto.species,
    };
  }
}
