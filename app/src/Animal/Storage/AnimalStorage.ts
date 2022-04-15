import { MySqlDbErrorException } from '../../Api/Exception/MySqlDbErrorException';
import KnexInstance from '../../KnexInstance';
import { AnimalEntity } from './Entity/AnimalEntity';
import { IAnimalStorage } from './IAnimalStorage';

export class AnimalStorage implements IAnimalStorage {
  public async findByName(name?: string, page?: number, pageSize?: number): Promise<AnimalEntity[]> {
    try {
      const query = KnexInstance.from('animals').orderBy('name').offset(page).limit(pageSize);
      if (name && name.length > 0) {
        query.where('name', 'LIKE', '%' + name + '%');
      }
      return (await query) as AnimalEntity[];
    } catch (e) {
      throw new MySqlDbErrorException(e);
    }
  }

  public async delete(id: string): Promise<void> {
    throw new Error('Method not implemented');
  }

  public async findAll(page?: number, pageSize?: number): Promise<AnimalEntity[]> {
    try {
      return await KnexInstance<AnimalEntity>('animals').offset(page).limit(pageSize);
    } catch (e) {
      throw new MySqlDbErrorException(e);
    }
  }

  public async save(entity: AnimalEntity): Promise<AnimalEntity> {
    try {
      await KnexInstance<AnimalEntity>('animals').insert(entity);
      return entity;
    } catch (e) {
      throw new MySqlDbErrorException(e);
    }
  }

  public async update(entity: AnimalEntity): Promise<AnimalEntity> {
    try {
      await KnexInstance<AnimalEntity>('animals').update(entity).where({ uuid: entity.uuid });
      return entity;
    } catch (e) {
      throw new MySqlDbErrorException(e);
    }
  }

  public async findByCpf(cpf: string): Promise<AnimalEntity> {
    try {
      const entity: AnimalEntity[] = await KnexInstance<AnimalEntity>('animals').where({ cpf }).limit(1);
      if (entity && entity.length > 0) {
        return entity[0];
      }
      return null;
    } catch (e) {
      throw new MySqlDbErrorException(e);
    }
  }

  public async findByRg(rg: string): Promise<AnimalEntity> {
    try {
      const entity: AnimalEntity[] = await KnexInstance<AnimalEntity>('animals').where('rg', rg).limit(1);
      if (entity && entity.length > 0) {
        return entity[0];
      }
      return null;
    } catch (e) {
      throw new MySqlDbErrorException(e);
    }
  }

  public async findById(id: string): Promise<AnimalEntity> {
    try {
      const entity: AnimalEntity[] = await KnexInstance<AnimalEntity>('animals').where('uuid', id).limit(1);
      if (entity && entity.length > 0) {
        return entity[0];
      }
      return null;
    } catch (e) {
      throw new MySqlDbErrorException(e);
    }
  }
}
