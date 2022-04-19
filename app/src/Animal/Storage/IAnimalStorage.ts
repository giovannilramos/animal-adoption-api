import { IStorage } from '../../Api/Storage/IStorage';
import { AnimalEntity } from './Entity/AnimalEntity';

export interface IAnimalStorage extends IStorage<AnimalEntity> {
  findByName(name?: string, page?: number, pageSize?: number): Promise<AnimalEntity[]>;
  findById(id: string): Promise<AnimalEntity>;
  findBySpecies(species: string): Promise<AnimalEntity[]>;
}
