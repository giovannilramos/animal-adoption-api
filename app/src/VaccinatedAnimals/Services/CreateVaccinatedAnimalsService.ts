import { VaccinatedAnimalsDto } from '../Dto/VaccinatedAnimalsDto';
import { IVaccinatedAnimalsStorage } from '../Storage/IVaccinatedAnimalsStorage';
import { CreateVaccinatedAnimalsTransformer } from '../Transformer/CreateVaccinatedAnimalsTransformer';
import { ResourceNotFoundException } from '../../Api/Exception/ResourceNotFoundException';
import { IAnimalStorage } from '../../Animal/Storage/IAnimalStorage';
import { IVaccineStorage } from '../../Vaccine/Storage/IVaccineStorage';

export class CreateVaccinatedAnimalsService {
  constructor(private readonly storage: IVaccinatedAnimalsStorage, private readonly transformer: CreateVaccinatedAnimalsTransformer, private readonly vaccineStorage: IVaccineStorage, private readonly animalsStorage: IAnimalStorage) {}

  public async invoke(dto: VaccinatedAnimalsDto): Promise<VaccinatedAnimalsDto> {
    const animal = await this.animalsStorage.findById(dto.uuid_animals);
    if (!animal) {
      throw new ResourceNotFoundException('Animal not found');
    }

    const vaccine = await this.vaccineStorage.findById(dto.uuid_vaccines);

    if (!vaccine) {
      throw new ResourceNotFoundException('Vaccine not found');
    }

    const entity = await this.transformer.toEntity(dto, vaccine);

    await this.storage.save(entity);

    return Promise.resolve(dto);
  }
}
