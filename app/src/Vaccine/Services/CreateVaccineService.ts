import { VaccineDto } from '../Dto/VaccineDto';
import { IVaccineStorage } from '../Storage/IVaccineStorage';
import { CreateVaccineTransformer } from '../Transformer/CreateVaccineTransformer';

export class CreateVaccineService {
  constructor(private readonly storage: IVaccineStorage, private readonly transformer: CreateVaccineTransformer) {}

  public async invoke(dto: VaccineDto): Promise<VaccineDto> {
    const entity = await this.transformer.toEntity(dto);

    await this.storage.save(entity);

    return Promise.resolve(dto);
  }
}
