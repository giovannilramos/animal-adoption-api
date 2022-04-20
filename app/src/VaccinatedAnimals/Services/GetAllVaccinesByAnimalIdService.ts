import { IVaccinatedAnimalsStorage } from '../Storage/IVaccinatedAnimalsStorage';
import { VaccinatedAnimalsDto } from '../Dto/VaccinatedAnimalsDto';
import { GetAllVaccinesByAnimalIdTransformer } from '../Transformer/GetAllVaccinesByAnimalIdTransformer';
import { IAnimalStorage } from '../../Animal/Storage/IAnimalStorage';
import { ResourceNotFoundException } from '../../Api/Exception/ResourceNotFoundException';

export class GetAllVaccinesByAnimalIdService {
  constructor(private readonly storage: IVaccinatedAnimalsStorage, private readonly transformer: GetAllVaccinesByAnimalIdTransformer, private readonly animalsStorage: IAnimalStorage) {}

  public async invoke(dto?: VaccinatedAnimalsDto): Promise<VaccinatedAnimalsDto[]> {
    const entityAnimals = await this.animalsStorage.findById(dto.uuid_animals);
    if (!entityAnimals) {
      throw new ResourceNotFoundException('Animal not found');
    }

    const entity = await this.storage.findByAnimalId(dto.uuid_animals);

    return await this.transformer.toDto(entity);
  }
}
