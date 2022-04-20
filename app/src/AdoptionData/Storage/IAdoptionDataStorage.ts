import { IStorage } from '../../Api/Storage/IStorage';
import { AdoptionDataEntity } from './Entity/AdoptionDataEntity';

export interface IAdoptionDataStorage extends IStorage<AdoptionDataEntity> {
  findByAdoptionDate(adoption_date?: Date, page?: number, pageSize?: number): Promise<AdoptionDataEntity[]>;
  findById(id: string): Promise<AdoptionDataEntity>;
  findByPersonId(id: string, page?: number, pageSize?: number): Promise<AdoptionDataEntity[]>;
}
