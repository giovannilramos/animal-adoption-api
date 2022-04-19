import { v4 as uuidv4 } from 'uuid';
import { IApiTransformer } from '../../Api/Transformers/IApiTransformer';
import { IDatabaseTransformer } from '../../Api/Transformers/IDatabaseTransformer';
import { ClassValidator } from '../../Api/Utils/ClassValidator';
import { AnimalDto } from '../Dto/AnimalDto';
import { CreateAnimalRequest } from '../Request/CreateAnimalRequest';
import { AnimalEntity } from '../Storage/Entity/AnimalEntity';

export class CreateAnimalTransformer implements IApiTransformer<AnimalDto, any>, IDatabaseTransformer<AnimalDto, AnimalEntity> {
  public async toApi(dto: AnimalDto): Promise<any> {
    throw new Error('Method implementation');
  }

  public async toDto(dto: AnimalDto | AnimalDto[], entity: AnimalEntity | AnimalEntity[]): Promise<AnimalDto | AnimalDto[]> {
    throw new Error('Method not implemented.');
  }

  public async fromApi(object: any, headers?: any): Promise<AnimalDto> {
    const requestObject = await ClassValidator.transformerToModel(CreateAnimalRequest, object);

    await ClassValidator.validateInput(requestObject);
    return {
      uuid: uuidv4(),
      name: requestObject.name,
      age: requestObject.age,
      sex: requestObject.sex,
      species: requestObject.species,
    };
  }

  public async toEntity(dto: AnimalDto, entity?: AnimalEntity): Promise<AnimalEntity> {
    return {
      uuid: dto.uuid,
      name: dto.name,
      age: dto.age,
      sex: dto.sex,
      species: dto.species,
    };
  }
}
