import {IStorage} from "../../Api/Storage/IStorage";
import { UserEntity } from "./Entity/UserEntity";

export interface IUserStorage extends IStorage<UserEntity> {
    findByUuid(uuid: string): Promise<UserEntity>;
    findByEmail(email: string): Promise<UserEntity>;
    save(entity: UserEntity): Promise<UserEntity>;
}
