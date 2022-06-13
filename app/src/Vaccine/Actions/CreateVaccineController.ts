import { NextFunction, Request, Response } from 'express';
import { IApiTransformer } from '../../Api/Transformers/IApiTransformer';
import { VaccineDto } from '../Dto/VaccineDto';
import { CreateVaccineService } from '../Services/CreateVaccineService';

export class CreateVaccineController {
  constructor(private readonly transformer: IApiTransformer<VaccineDto, any>, private readonly service: CreateVaccineService) {}

  public async handle(req: Request, res: Response, next: NextFunction): Promise<Response> {
    try {
      const dto = <VaccineDto>await this.transformer.fromApi(req.body);

      await this.service.invoke(dto);

      return res.status(201).send();
    } catch (error) {
      next(error);
    }
  }
}
