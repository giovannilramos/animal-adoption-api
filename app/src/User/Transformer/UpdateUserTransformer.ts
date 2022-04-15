import {IApiTransformer} from "../../Api/Transformers/IApiTransformer";
import {ClassValidator} from "../../Api/Utils/ClassValidator";
import {UserDto} from "../Dto/UserDto";
import {GetUserResponse} from "../Response/GetUserResponse";
import {UpdateUserRequest} from "../Request/UpdateUserRequest";
import {UserEntity} from "../Storage/Entity/UserEntity";
import ContextRequestHelper from "../../Api/Helpers/ContextRequestHelper";

export class UpdateUserTransformer implements IApiTransformer<UserDto, GetUserResponse> {
    public async fromApi(object: any, headers?: any): Promise<UserDto> {
        const requestObject = <UpdateUserRequest>await ClassValidator.transformerToModel(UpdateUserRequest, object);
        await ClassValidator.validateInput(requestObject);
        const payload = await ContextRequestHelper.getContextRequest();

        return Promise.resolve({
            uuid:  payload.userId,
            name: requestObject.name,
            email: requestObject.email,
        });
    }

    public async toDto(dto: UserDto, entity: UserEntity): Promise<UserDto> {
        throw new Error("Method not implemented");
    }

    public async toEntity(dto: UserDto): Promise<UserEntity> {
        return {
            uuid: dto.uuid,
            name: dto.name,
            email: dto.email,
        };

    }

    public async toApi(dto: UserDto): Promise<GetUserResponse> {
        return {
            uuid: dto.uuid,
            name: dto.name,
            email: dto.email,
        };
    }
}
