import { MySqlDbErrorException } from '../../Api/Exception/MySqlDbErrorException';
import { PeopleEntity } from './Entity/PeopleEntity';
import { IPeopleStorage } from './IPeopleStorage';
import { KnexInstance } from '../../Database/KnexConnection';

export class PeopleStorage implements IPeopleStorage {
  public async findByName(name?: string, page?: number, pageSize?: number): Promise<PeopleEntity[]> {
    try {
      const query = KnexInstance.from('people').orderBy('name').offset(page).limit(pageSize);
      if (name && name.length > 0) {
        query.where('name', 'LIKE', '%' + name + '%');
      }
      return (await query) as PeopleEntity[];
    } catch (e) {
      throw new MySqlDbErrorException(e);
    }
  }

  public async delete(id: string): Promise<void> {
    throw new Error('Method not implemented');
  }

  public async findAll(page?: number, pageSize?: number): Promise<PeopleEntity[]> {
    try {
      return await KnexInstance<PeopleEntity>('people').offset(page).limit(pageSize);
    } catch (e) {
      throw new MySqlDbErrorException(e);
    }
  }

  public async save(entity: PeopleEntity): Promise<PeopleEntity> {
    try {
      await KnexInstance<PeopleEntity>('people').insert(entity);
      return entity;
    } catch (e) {
      throw new MySqlDbErrorException(e);
    }
  }

  public async update(entity: PeopleEntity): Promise<PeopleEntity> {
    try {
      await KnexInstance<PeopleEntity>('people').update(entity).where({ uuid: entity.uuid });
      return entity;
    } catch (e) {
      throw new MySqlDbErrorException(e);
    }
  }

  public async findByCpf(cpf: string): Promise<PeopleEntity> {
    try {
      const entity: PeopleEntity[] = await KnexInstance<PeopleEntity>('people').where({ cpf }).limit(1);
      if (entity && entity.length > 0) {
        return entity[0];
      }
      return null;
    } catch (e) {
      throw new MySqlDbErrorException(e);
    }
  }

  public async findByRg(rg: string): Promise<PeopleEntity> {
    try {
      const entity: PeopleEntity[] = await KnexInstance<PeopleEntity>('people').where('rg', rg).limit(1);
      if (entity && entity.length > 0) {
        return entity[0];
      }
      return null;
    } catch (e) {
      throw new MySqlDbErrorException(e);
    }
  }

  public async findById(id: string): Promise<PeopleEntity> {
    try {
      const entity: PeopleEntity[] = await KnexInstance<PeopleEntity>('people').where('uuid', id).limit(1);
      if (entity && entity.length > 0) {
        return entity[0];
      }
      return null;
    } catch (e) {
      throw new MySqlDbErrorException(e);
    }
  }
}
