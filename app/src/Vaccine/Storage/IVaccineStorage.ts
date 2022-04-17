import { IStorage } from '../../Api/Storage/IStorage';
import { VaccineEntity } from './Entity/VaccineEntity';

export interface IVaccineStorage extends IStorage<VaccineEntity> {
  findByName(name?: string, page?: number, pageSize?: number): Promise<VaccineEntity[]>;
  findById(id: string): Promise<VaccineEntity>;
}
