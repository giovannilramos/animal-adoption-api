import {IUserStorage} from "./IUserStorage";
import {UserEntity} from "./Entity/UserEntity";
import {Knex} from "knex";
import {KnexInstance} from "../../Database/KnexConnection";
import {MySqlDbErrorException} from "../../Api/Exception/MySqlDbErrorException";

export class UserStorage implements IUserStorage {
    public async delete(id: number): Promise<void> {
        try {
            await KnexInstance<UserEntity>('user').delete().where({id});
        } catch (e) {
            throw new MySqlDbErrorException(e);
        }
    }

    public async findAll(page?: number, pageSize?: number): Promise<UserEntity[]> {
        try {
            return await KnexInstance<UserEntity>('user').offset(page).limit(pageSize);
        } catch (e) {
            throw new MySqlDbErrorException(e);
        }
    }

    public async findById(id: number): Promise<UserEntity> {
        try {
            const entity:UserEntity[] = await KnexInstance<UserEntity>('user').where({id}).limit(1);
            if(entity && entity.length > 0){
                return entity[0];
            }
            return null;
        } catch (e) {
            throw new MySqlDbErrorException(e);
        }
    }

    public async findByUuid(uuid: string): Promise<UserEntity> {
        try {
            const entity:UserEntity[] = await KnexInstance<UserEntity>('user').where({uuid}).limit(1);
            if(entity && entity.length > 0){
                return entity[0];
            }
            return null;
        } catch (e) {
            throw new MySqlDbErrorException(e);
        }
    }

    public async findByEmail(email: string): Promise<UserEntity> {
        try {
           const entity:UserEntity[] = await KnexInstance<UserEntity>('user').where({email}).limit(1);
           if(entity && entity.length > 0){
             return entity[0];
           }
           return null;
        } catch (e) {
            throw new MySqlDbErrorException(e);
        }
    }

    public async save(entity: UserEntity): Promise<UserEntity> {
        try {
            return await KnexInstance<UserEntity>('user').insert(entity);
        } catch (e) {
            throw new MySqlDbErrorException(e);
        }
    }

    public async update(entity: UserEntity): Promise<UserEntity> {
        try {
            await KnexInstance<UserEntity>('user').update(entity).where({uuid: entity.uuid});
            return entity;
        } catch (e) {
            throw new MySqlDbErrorException(e);
        }
    }

}
