import { NextFunction, Request, Response } from 'express';
import { IApiTransformer } from '../../Api/Transformers/IApiTransformer';
import { UserDto } from '../Dto/UserDto';
import { GetUserService } from '../Services/GetUserService';
import { GetUserResponse } from '../Response/GetUserResponse';

export class GetUserController {
  constructor(private readonly transformer: IApiTransformer<UserDto, GetUserResponse>, private readonly service: GetUserService) {}

  public async handle(req: Request, res: Response, next: NextFunction): Promise<Response> {
    try {
      const dto = <UserDto>await this.transformer.fromApi(req.body, req.headers);

      const result = await this.service.invoke(dto);

      const response = await this.transformer.toApi(result);

      return res.status(200).send(response);
    } catch (error) {
      next(error);
    }
  }
}
