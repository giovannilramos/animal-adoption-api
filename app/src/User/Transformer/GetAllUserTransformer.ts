import {IApiTransformer} from "../../Api/Transformers/IApiTransformer";
import {UserDto} from "../Dto/UserDto";
import {GetUserResponse} from "../Response/GetUserResponse";

export class GetAllUserTransformer implements IApiTransformer<UserDto, GetUserResponse> {
    public async fromApi(object: any, headers?: any): Promise<UserDto[]> {
        throw new Error("Method not implementation.");
    }

    public async toApi(dto: UserDto[]): Promise<GetUserResponse[]> {
        return dto.map(el=>{
            return{
                uuid: el.uuid,
                name: el.name,
                email: el.email,
            }
        });
    }

}
