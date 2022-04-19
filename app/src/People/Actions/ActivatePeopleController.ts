import { NextFunction, Request, Response } from 'express';
import { IApiTransformer } from '../../Api/Transformers/IApiTransformer';
import { PeopleDto } from '../Dto/PeopleDto';
import { ActivatePeopleService } from '../Services/ActivatePeopleService';

export class ActivatePeopleController {
  constructor(private readonly transformer: IApiTransformer<PeopleDto, any>, private readonly service: ActivatePeopleService) {}

  public async handle(req: Request, res: Response, next: NextFunction): Promise<Response> {
    try {
      const dto = <PeopleDto>await this.transformer.fromApi(req.params);

      await this.service.invoke(dto);

      return res.status(204).send();
    } catch (error) {
      next(error);
    }
  }
}
