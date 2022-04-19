import { IApiTransformer } from '../../Api/Transformers/IApiTransformer';
import { NextFunction, Request, Response } from 'express';
import { PeopleResponse } from '../Response/PeopleResponse';
import { GetPeopleService } from '../Services/GetPeopleService';
import { PeopleDto } from '../Dto/PeopleDto';

export class GetPeopleController {
  constructor(private readonly transformer: IApiTransformer<PeopleDto, PeopleResponse>, private readonly service: GetPeopleService) {}

  public async handle(req: Request, res: Response, next: NextFunction): Promise<Response> {
    try {
      let dto = <PeopleDto>await this.transformer.fromApi(req.params);
      dto = await this.service.invoke(dto);
      const response = await this.transformer.toApi(dto);
      return res.status(200).send(response);
    } catch (error) {
      next(error);
    }
  }
}
