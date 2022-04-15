import {ResourceNotFoundException} from "../../Api/Exception/ResourceNotFoundException";
import {IUserStorage} from "../Storage/IUserStorage";
import {UserDto} from "../Dto/UserDto";

export class GetAllUserService {
    constructor(private readonly storage: IUserStorage) {
    }

    public async invoke(): Promise<UserDto[]> {
        const entityList = await this.storage.findAll(0, 500);
        if (!entityList) {
            throw new ResourceNotFoundException('Clients not found');
        }
        console.log(entityList);
        return <UserDto[]>entityList;
    }
}
