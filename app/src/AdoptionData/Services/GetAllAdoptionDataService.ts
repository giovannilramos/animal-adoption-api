import { IAdoptionDataStorage } from '../Storage/IAdoptionDataStorage';
import { AdoptionDataDto } from '../Dto/AdoptionDataDto';
import { GetAllAdoptionDataTransformer } from '../Transformer/GetAllAdoptionDataTransformer';

export class GetAllAdoptionDataService {
  constructor(private readonly storage: IAdoptionDataStorage, private readonly transformer: GetAllAdoptionDataTransformer) {}

  public async invoke(dto?: AdoptionDataDto): Promise<AdoptionDataDto[]> {
    const entity = await this.storage.findByAdoptionDate(dto.adoption_date);

    return await this.transformer.toDto(entity);
  }
}
