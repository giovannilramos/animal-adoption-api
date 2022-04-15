import { NextFunction, Request, Response } from 'express';
import { IApiTransformer } from '../../Api/Transformers/IApiTransformer';
import { PeopleDto } from '../Dto/PeopleDto';
import { CreatePeopleService } from '../Services/CreatePeopleService';

export class CreatePeopleController {
  constructor(private readonly transformer: IApiTransformer<PeopleDto, any>, private readonly service: CreatePeopleService) {}

  public async handle(req: Request, res: Response, next: NextFunction): Promise<Response> {
    try {
      const dto = (await this.transformer.fromApi(req.body)) as PeopleDto;

      await this.service.invoke(dto);

      return res.status(204).send();
    } catch (error) {
      next(error);
    }
  }
}
