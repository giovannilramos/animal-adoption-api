import { NextFunction, Request, Response } from "express";
import { IApiTransformer } from "../../Api/Transformers/IApiTransformer";
import {UserDto} from "../Dto/UserDto";
import {GetUserResponse} from "../Response/GetUserResponse";
import {UpdateUserService} from "../Services/UpdateUserService";

export class UpdateUserController {
    constructor(private readonly transformer: IApiTransformer<UserDto, GetUserResponse>, private readonly service: UpdateUserService) {
    }

    public async handle(req: Request, res: Response, next: NextFunction): Promise<Response> {
        try {
            let dto = <UserDto>await this.transformer.fromApi(req.body, req.params);
            dto = await this.service.invoke(dto);
            const response = await this.transformer.toApi(dto);
            return res.status(200).send(response);
        } catch (error) {
            next(error);
        }
    }
}
