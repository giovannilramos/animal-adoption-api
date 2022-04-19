import { IApiTransformer } from '../../Api/Transformers/IApiTransformer';
import { IDatabaseTransformer } from '../../Api/Transformers/IDatabaseTransformer';
import { ClassValidator } from '../../Api/Utils/ClassValidator';
import { PeopleDto } from '../Dto/PeopleDto';
import { PeopleEntity } from '../Storage/Entity/PeopleEntity';
import { GetPeopleRequest } from '../Request/GetPeopleRequest';

export class DeletePeopleTransformer implements IApiTransformer<PeopleDto, any>, IDatabaseTransformer<PeopleDto, PeopleEntity> {
  public async toApi(dto: PeopleDto): Promise<any> {
    throw new Error('Method implementation');
  }

  public async toDto(dto: PeopleDto | PeopleDto[], entity: PeopleEntity | PeopleEntity[]): Promise<PeopleDto | PeopleDto[]> {
    throw new Error('Method not implemented.');
  }

  public async fromApi(object: any, headers?: any): Promise<PeopleDto> {
    const requestObject = await ClassValidator.transformerToModel(GetPeopleRequest, object);

    await ClassValidator.validateInput(requestObject);
    return {
      uuid: requestObject.uuid,
    };
  }

  public async toEntity(dto: PeopleDto, entity?: PeopleEntity): Promise<PeopleEntity> {
    throw new Error('Method implementation');
  }
}
