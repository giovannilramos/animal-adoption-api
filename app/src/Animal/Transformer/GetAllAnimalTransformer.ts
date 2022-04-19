import { IApiTransformer } from '../../Api/Transformers/IApiTransformer';
import { IDatabaseTransformer } from '../../Api/Transformers/IDatabaseTransformer';
import { AnimalDto } from '../Dto/AnimalDto';
import { AnimalResponse } from '../Response/AnimalResponse';
import { AnimalEntity } from '../Storage/Entity/AnimalEntity';

export class GetAllAnimalTransformer implements IApiTransformer<AnimalDto, AnimalResponse>, IDatabaseTransformer<AnimalDto, AnimalEntity> {
  public async toEntity(dto: AnimalDto): Promise<AnimalEntity> {
    throw new Error('Method not implemented.');
  }

  public async fromApi(object: any, headers?: any): Promise<AnimalDto> {
    throw new Error('Method not implemented');
  }

  public async toDto(entity?: AnimalEntity[]): Promise<AnimalDto[]> {
    return entity.map((el) => {
      return {
        uuid: el.uuid,
        age: el.age,
        sex: el.sex,
        name: el.name,
        species: el.species,
      };
    });
  }

  public async toApi(dto: AnimalDto[]): Promise<AnimalResponse[]> {
    return dto.map((el) => {
      return {
        uuid: el.uuid,
        age: el.age,
        sex: el.sex,
        name: el.name,
        species: el.species,
      };
    });
  }
}
