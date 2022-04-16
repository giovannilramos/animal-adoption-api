import { NextFunction, Request, Response } from 'express';
import { IApiTransformer } from '../../Api/Transformers/IApiTransformer';
import AuthDto from '../Dto/AuthDto';
import AuthResponse from '../Response/AuthResponse';
import AuthService from '../Services/AuthService';

export default class AuthController {
  constructor(private transformer: IApiTransformer<AuthDto, AuthResponse>, private service: AuthService) {}

  public async handle(req: Request, res: Response, next: NextFunction): Promise<Response> {
    try {
      let dto = <AuthDto>await this.transformer.fromApi(req.body);

      dto = await this.service.invoke(dto);

      const response = await this.transformer.toApi(dto);
      console.log(response);

      return res.status(200).send(response);
    } catch (error) {
      next(error);
    }
  }
}
