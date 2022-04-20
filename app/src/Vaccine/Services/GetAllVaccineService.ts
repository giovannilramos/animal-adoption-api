import { VaccineDto } from '../Dto/VaccineDto';
import { IVaccineStorage } from '../Storage/IVaccineStorage';
import { GetAllVaccineTransformer } from '../Transformer/GetAllVaccineTransformer';

export class GetAllVaccineService {
  constructor(private readonly storage: IVaccineStorage, private readonly transformer: GetAllVaccineTransformer) {}

  public async invoke(dto?: VaccineDto): Promise<VaccineDto[]> {
    const entity = await this.storage.findByName(dto.name);

    return await this.transformer.toDto(entity);
  }
}
