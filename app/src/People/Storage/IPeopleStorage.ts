import { IStorage } from '../../Api/Storage/IStorage';
import { PeopleEntity } from './Entity/PeopleEntity';

export interface IPeopleStorage extends IStorage<PeopleEntity> {
  findByName(name?: string, page?: number, pageSize?: number): Promise<PeopleEntity[]>;
  findByCpf(cpf: string): Promise<PeopleEntity>;
  findByRg(rg: string): Promise<PeopleEntity>;
  findById(id: string): Promise<PeopleEntity>;
  updateStatus(id: string, status: boolean): Promise<void>;
}
