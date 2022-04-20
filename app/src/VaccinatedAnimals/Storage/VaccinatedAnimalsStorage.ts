import { MySqlDbErrorException } from '../../Api/Exception/MySqlDbErrorException';
import { VaccinatedAnimalsEntity } from './Entity/VaccinatedAnimalsEntity';
import { IVaccinatedAnimalsStorage } from './IVaccinatedAnimalsStorage';
import { KnexInstance } from '../../Database/KnexConnection';

export class VaccinatedAnimalsStorage implements IVaccinatedAnimalsStorage {
  public async findByVaccinationDate(vaccination_date?: Date, page?: number, pageSize?: number): Promise<VaccinatedAnimalsEntity[]> {
    try {
      const query = KnexInstance.from('vaccinated_animals').orderBy('vaccination_date', 'desc').offset(page).limit(pageSize);
      if (vaccination_date) {
        query.where('vaccinated_animals', vaccination_date);
      }
      return (await query) as VaccinatedAnimalsEntity[];
    } catch (e) {
      throw new MySqlDbErrorException(e);
    }
  }

  public async findByAnimalId(uuid_animals: string, page?: number, pageSize?: number): Promise<VaccinatedAnimalsEntity[]> {
    try {
      return await KnexInstance<VaccinatedAnimalsEntity>('vaccinated_animals').where('uuid_animals', uuid_animals).orderBy('vaccination_date', 'desc').offset(page).limit(pageSize);
    } catch (e) {
      throw new MySqlDbErrorException(e);
    }
  }

  public async delete(id: string): Promise<void> {
    throw new Error('Method not implemented');
  }

  public async findAll(page?: number, pageSize?: number): Promise<VaccinatedAnimalsEntity[]> {
    try {
      return await KnexInstance<VaccinatedAnimalsEntity>('vaccinated_animals').offset(page).limit(pageSize);
    } catch (e) {
      throw new MySqlDbErrorException(e);
    }
  }

  public async save(entity: VaccinatedAnimalsEntity): Promise<VaccinatedAnimalsEntity> {
    try {
      await KnexInstance<VaccinatedAnimalsEntity>('vaccinated_animals').insert(entity);
      return entity;
    } catch (e) {
      throw new MySqlDbErrorException(e);
    }
  }

  public async update(entity: VaccinatedAnimalsEntity): Promise<VaccinatedAnimalsEntity> {
    try {
      await KnexInstance<VaccinatedAnimalsEntity>('vaccinated_animals').update(entity).where({ uuid: entity.uuid });
      return entity;
    } catch (e) {
      throw new MySqlDbErrorException(e);
    }
  }

  public async findById(id: string): Promise<VaccinatedAnimalsEntity> {
    try {
      const entity: VaccinatedAnimalsEntity[] = await KnexInstance<VaccinatedAnimalsEntity>('vaccinated_animals').where('uuid', id).limit(1);
      if (entity && entity.length > 0) {
        return entity[0];
      }
      return null;
    } catch (e) {
      throw new MySqlDbErrorException(e);
    }
  }
}
