import { IVaccinatedAnimalsStorage } from '../Storage/IVaccinatedAnimalsStorage';
import { VaccinatedAnimalsDto } from '../Dto/VaccinatedAnimalsDto';
import { GetAllVaccinesByAnimalIdTransformer } from '../Transformer/GetAllVaccinesByAnimalIdTransformer';

export class GetAllVaccinesByAnimalIdService {
  constructor(private readonly storage: IVaccinatedAnimalsStorage, private readonly transformer: GetAllVaccinesByAnimalIdTransformer) {}

  public async invoke(dto?: VaccinatedAnimalsDto): Promise<VaccinatedAnimalsDto[]> {
    const entity = await this.storage.findByAnimalId(dto.uuid_animals);

    return await this.transformer.toDto(entity);
  }
}
