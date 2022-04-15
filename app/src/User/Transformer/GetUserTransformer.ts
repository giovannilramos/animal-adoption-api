import {IApiTransformer} from "../../Api/Transformers/IApiTransformer";
import {GetUserResponse} from "../Response/GetUserResponse";
import {UserDto} from "../Dto/UserDto";
import ContextRequestHelper from "../../Api/Helpers/ContextRequestHelper";

export class GetUserTransformer implements IApiTransformer<UserDto, GetUserResponse> {
    public async fromApi(object: any, headers?: any): Promise<UserDto> {

        const payload = await ContextRequestHelper.getContextRequest();

        return Promise.resolve({
            uuid: payload.userId,
        });
    }

    public async toApi(dto: UserDto): Promise<GetUserResponse> {
        return {
            uuid: dto.uuid,
            name: dto.name,
            email: dto.email,
        };
    }

}
