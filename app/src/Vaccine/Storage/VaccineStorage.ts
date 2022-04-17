import { MySqlDbErrorException } from '../../Api/Exception/MySqlDbErrorException';
import { VaccineEntity } from './Entity/VaccineEntity';
import { IVaccineStorage } from './IVaccineStorage';
import { KnexInstance } from '../../Database/KnexConnection';

export class VaccineStorage implements IVaccineStorage {
  public async findByName(name?: string, page?: number, pageSize?: number): Promise<VaccineEntity[]> {
    try {
      const query = KnexInstance.from('vaccines').orderBy('name').offset(page).limit(pageSize);
      if (name && name.length > 0) {
        query.where('name', 'LIKE', '%' + name + '%');
      }
      return (await query) as VaccineEntity[];
    } catch (e) {
      throw new MySqlDbErrorException(e);
    }
  }

  public async delete(id: string): Promise<void> {
    throw new Error('Method not implemented');
  }

  public async findAll(page?: number, pageSize?: number): Promise<VaccineEntity[]> {
    try {
      return await KnexInstance<VaccineEntity>('vaccines').offset(page).limit(pageSize);
    } catch (e) {
      throw new MySqlDbErrorException(e);
    }
  }

  public async save(entity: VaccineEntity): Promise<VaccineEntity> {
    try {
      await KnexInstance<VaccineEntity>('vaccines').insert(entity);
      return entity;
    } catch (e) {
      throw new MySqlDbErrorException(e);
    }
  }

  public async update(entity: VaccineEntity): Promise<VaccineEntity> {
    try {
      await KnexInstance<VaccineEntity>('vaccines').update(entity).where({ uuid: entity.uuid });
      return entity;
    } catch (e) {
      throw new MySqlDbErrorException(e);
    }
  }

  public async findById(id: string): Promise<VaccineEntity> {
    try {
      const entity: VaccineEntity[] = await KnexInstance<VaccineEntity>('vaccines').where('uuid', id).limit(1);
      if (entity && entity.length > 0) {
        return entity[0];
      }
      return null;
    } catch (e) {
      throw new MySqlDbErrorException(e);
    }
  }
}
