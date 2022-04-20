import { IStorage } from '../../Api/Storage/IStorage';
import { VaccinatedAnimalsEntity } from './Entity/VaccinatedAnimalsEntity';

export interface IVaccinatedAnimalsStorage extends IStorage<VaccinatedAnimalsEntity> {
  findByVaccinationDate(vaccination_date?: Date, page?: number, pageSize?: number): Promise<VaccinatedAnimalsEntity[]>;
  findByAnimalId(id: string, page?: number, pageSize?: number): Promise<VaccinatedAnimalsEntity[]>;
  findById(id: string): Promise<VaccinatedAnimalsEntity>;
}
