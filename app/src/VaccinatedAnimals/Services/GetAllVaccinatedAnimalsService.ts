import { IVaccinatedAnimalsStorage } from '../Storage/IVaccinatedAnimalsStorage';
import { VaccinatedAnimalsDto } from '../Dto/VaccinatedAnimalsDto';
import { GetAllVaccinatedAnimalsTransformer } from '../Transformer/GetAllVaccinatedAnimalsTransformer';

export class GetAllVaccinatedAnimalsService {
  constructor(private readonly storage: IVaccinatedAnimalsStorage, private readonly transformer: GetAllVaccinatedAnimalsTransformer) {}

  public async invoke(dto?: VaccinatedAnimalsDto): Promise<VaccinatedAnimalsDto[]> {
    const entity = await this.storage.findByVaccinationDate(dto.vaccination_date);

    return await this.transformer.toDto(entity);
  }
}
