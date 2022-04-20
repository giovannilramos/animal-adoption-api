import { ResourceNotFoundException } from '../../Api/Exception/ResourceNotFoundException';
import { IVaccineStorage } from '../Storage/IVaccineStorage';
import { VaccineDto } from '../Dto/VaccineDto';
import { GetVaccineTransformer } from '../Transformer/GetVaccineTransformer';

export class GetVaccineService {
  constructor(private readonly storage: IVaccineStorage, private readonly transformer: GetVaccineTransformer) {}

  public async invoke(dto: VaccineDto): Promise<VaccineDto> {
    const entity = await this.storage.findById(dto.uuid);

    if (!entity) {
      throw new ResourceNotFoundException('Vaccine not found');
    }

    return await this.transformer.toDto(entity);
  }
}
