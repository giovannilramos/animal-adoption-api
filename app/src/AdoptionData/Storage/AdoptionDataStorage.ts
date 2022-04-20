import { MySqlDbErrorException } from '../../Api/Exception/MySqlDbErrorException';
import { AdoptionDataEntity } from './Entity/AdoptionDataEntity';
import { IAdoptionDataStorage } from './IAdoptionDataStorage';
import { KnexInstance } from '../../Database/KnexConnection';

export class AdoptionDataStorage implements IAdoptionDataStorage {
  public async findByAdoptionDate(adoption_date?: Date, page?: number, pageSize?: number): Promise<AdoptionDataEntity[]> {
    try {
      const query = KnexInstance.from('adoption_data').orderBy('adoption_date').offset(page).limit(pageSize);
      if (adoption_date) {
        query.where('adoption_date', adoption_date);
      }
      return (await query) as AdoptionDataEntity[];
    } catch (e) {
      throw new MySqlDbErrorException(e);
    }
  }

  public async findByPersonId(uuid_people: string, page?: number, pageSize?: number): Promise<AdoptionDataEntity[]> {
    try {
      return await KnexInstance<AdoptionDataEntity>('adoption_data').where('uuid_people', uuid_people).orderBy('adoption_date', 'desc').offset(page).limit(pageSize);
    } catch (e) {
      throw new MySqlDbErrorException(e);
    }
  }

  public async delete(id: string): Promise<void> {
    throw new Error('Method not implemented');
  }

  public async findAll(page?: number, pageSize?: number): Promise<AdoptionDataEntity[]> {
    try {
      return await KnexInstance<AdoptionDataEntity>('adoption_data').offset(page).limit(pageSize);
    } catch (e) {
      throw new MySqlDbErrorException(e);
    }
  }

  public async save(entity: AdoptionDataEntity): Promise<AdoptionDataEntity> {
    try {
      await KnexInstance<AdoptionDataEntity>('adoption_data').insert(entity);
      return entity;
    } catch (e) {
      throw new MySqlDbErrorException(e);
    }
  }

  public async update(entity: AdoptionDataEntity): Promise<AdoptionDataEntity> {
    try {
      await KnexInstance<AdoptionDataEntity>('adoption_data').update(entity).where({ uuid: entity.uuid });
      return entity;
    } catch (e) {
      throw new MySqlDbErrorException(e);
    }
  }

  public async findById(id: string): Promise<AdoptionDataEntity> {
    try {
      const entity: AdoptionDataEntity[] = await KnexInstance<AdoptionDataEntity>('adoption_data').where('uuid', id).limit(1);
      if (entity && entity.length > 0) {
        return entity[0];
      }
      return null;
    } catch (e) {
      throw new MySqlDbErrorException(e);
    }
  }
}
