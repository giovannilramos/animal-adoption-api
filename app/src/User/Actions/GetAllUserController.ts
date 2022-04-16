import { NextFunction, Request, Response } from 'express';
import { IApiTransformer } from '../../Api/Transformers/IApiTransformer';
import { UserDto } from '../Dto/UserDto';
import { GetUserResponse } from '../Response/GetUserResponse';
import { GetAllUserService } from '../Services/GetAllUserService';

export class GetAllUserController {
  constructor(private readonly transformer: IApiTransformer<UserDto, GetUserResponse>, private readonly service: GetAllUserService) {}

  public async handle(req: Request, res: Response, next: NextFunction): Promise<Response> {
    try {
      const dto = await this.service.invoke();
      const response = await this.transformer.toApi(dto);
      return res.status(200).send(response);
    } catch (error) {
      next(error);
    }
  }
}
