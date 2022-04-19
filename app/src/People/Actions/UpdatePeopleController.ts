import { IApiTransformer } from '../../Api/Transformers/IApiTransformer';
import { NextFunction, Request, Response } from 'express';
import { PeopleResponse } from '../Response/PeopleResponse';
import { PeopleDto } from '../Dto/PeopleDto';
import { UpdatePeopleService } from '../Services/UpdatePeopleService';

export class UpdatePeopleController {
  constructor(private readonly transformer: IApiTransformer<PeopleDto, PeopleResponse>, private readonly service: UpdatePeopleService) {}

  public async handle(req: Request, res: Response, next: NextFunction): Promise<Response> {
    try {
      const dto = <PeopleDto>await this.transformer.fromApi({ ...req.params, ...req.body });
      await this.service.invoke(dto);
      return res.status(204).send();
    } catch (error) {
      next(error);
    }
  }
}
