import { IApiTransformer } from '../../Api/Transformers/IApiTransformer';
import { NextFunction, Request, Response } from 'express';
import { AdoptionDataDto } from '../Dto/AdoptionDataDto';
import { GetAllAdoptionDataService } from '../Services/GetAllAdoptionDataService';
import { AdoptionDataResponse } from '../Response/AdoptionDataResponse';

export class GetAllAdoptionDataController {
  constructor(private readonly transformer: IApiTransformer<AdoptionDataDto, AdoptionDataResponse>, private readonly service: GetAllAdoptionDataService) {}

  public async handle(req: Request, res: Response, next: NextFunction): Promise<Response> {
    try {
      const request = <AdoptionDataDto>await this.transformer.fromApi(req.query);
      const dto = await this.service.invoke(request);
      const response = await this.transformer.toApi(dto);
      return res.status(200).send(response);
    } catch (error) {
      next(error);
    }
  }
}
