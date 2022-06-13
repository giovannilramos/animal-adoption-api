import { NextFunction, Request, Response } from 'express';
import { IApiTransformer } from '../../Api/Transformers/IApiTransformer';
import { AdoptionDataDto } from '../Dto/AdoptionDataDto';
import { CreateAdoptionDataService } from '../Services/CreateAdoptionDataService';

export class CreateAdoptionDataController {
  constructor(private readonly transformer: IApiTransformer<AdoptionDataDto, any>, private readonly service: CreateAdoptionDataService) {}

  public async handle(req: Request, res: Response, next: NextFunction): Promise<Response> {
    try {
      const dto = <AdoptionDataDto>await this.transformer.fromApi({ ...req.params, ...req.body });

      await this.service.invoke(dto);

      return res.status(201).send();
    } catch (error) {
      next(error);
    }
  }
}
