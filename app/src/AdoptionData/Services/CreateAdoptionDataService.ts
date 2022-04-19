import { AdoptionDataDto } from '../Dto/AdoptionDataDto';
import { IAdoptionDataStorage } from '../Storage/IAdoptionDataStorage';
import { CreateAdoptionDataTransformer } from '../Transformer/CreateAdoptionDataTransformer';
import { IPeopleStorage } from '../../People/Storage/IPeopleStorage';
import { ResourceNotFoundException } from '../../Api/Exception/ResourceNotFoundException';
import { IAnimalStorage } from '../../Animal/Storage/IAnimalStorage';

export class CreateAdoptionDataService {
  constructor(private readonly storage: IAdoptionDataStorage, private readonly transformer: CreateAdoptionDataTransformer, private readonly peopleStorage: IPeopleStorage, private readonly animalsStorage: IAnimalStorage) {}

  public async invoke(dto: AdoptionDataDto): Promise<AdoptionDataDto> {
    const animal = await this.animalsStorage.findById(dto.uuid_animals);
    if (!animal) {
      throw new ResourceNotFoundException('Animal not found');
    }

    const person = await this.peopleStorage.findByCpf(dto.cpf_people);

    if (!person) {
      throw new ResourceNotFoundException("This person don't have register, please register first");
    }

    const entity = await this.transformer.toEntity(dto, person);

    await this.storage.save(entity);

    return Promise.resolve(dto);
  }
}
