import { IApiTransformer } from '../../Api/Transformers/IApiTransformer';
import { NextFunction, Request, Response } from 'express';
import { PeopleDto } from '../Dto/PeopleDto';
import { PeopleResponse } from '../Response/PeopleResponse';
import { GetAllPeopleService } from '../Services/GetAllPeopleService';

export class GetAllPeopleController {
  constructor(private readonly transformer: IApiTransformer<PeopleDto, PeopleResponse>, private readonly service: GetAllPeopleService) {}

  public async handle(req: Request, res: Response, next: NextFunction): Promise<Response> {
    try {
      const request = <PeopleDto>await this.transformer.fromApi(req.query);
      const dto = await this.service.invoke(request);
      const response = await this.transformer.toApi(dto);
      return res.status(200).send(response);
    } catch (error) {
      next(error);
    }
  }
}
