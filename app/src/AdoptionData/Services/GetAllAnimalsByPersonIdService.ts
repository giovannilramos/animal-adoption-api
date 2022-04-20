import { IAdoptionDataStorage } from '../Storage/IAdoptionDataStorage';
import { AdoptionDataDto } from '../Dto/AdoptionDataDto';
import { IPeopleStorage } from '../../People/Storage/IPeopleStorage';
import { GetAllAnimalsByPersonIdTransformer } from '../Transformer/GetAllAnimalsByPersonIdTransformer';
import { ResourceNotFoundException } from '../../Api/Exception/ResourceNotFoundException';

export class GetAllAnimalsByPersonIdService {
  constructor(private readonly storage: IAdoptionDataStorage, private readonly transformer: GetAllAnimalsByPersonIdTransformer, private readonly personStorage: IPeopleStorage) {}

  public async invoke(dto?: AdoptionDataDto): Promise<AdoptionDataDto[]> {
    const entityPerson = await this.personStorage.findByCpf(dto.cpf_people);
    if (!entityPerson) {
      throw new ResourceNotFoundException("This person don't have register, please register first");
    }

    const entity = await this.storage.findByPersonId(entityPerson.uuid);

    return await this.transformer.toDto(entity);
  }
}
