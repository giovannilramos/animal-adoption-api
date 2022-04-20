import { NextFunction, Request, Response } from 'express';
import { IApiTransformer } from '../../Api/Transformers/IApiTransformer';
import { VaccinatedAnimalsDto } from '../Dto/VaccinatedAnimalsDto';
import { CreateVaccinatedAnimalsService } from '../Services/CreateVaccinatedAnimalsService';

export class CreateVaccinatedAnimalsController {
  constructor(private readonly transformer: IApiTransformer<VaccinatedAnimalsDto, any>, private readonly service: CreateVaccinatedAnimalsService) {}

  public async handle(req: Request, res: Response, next: NextFunction): Promise<Response> {
    try {
      const dto = <VaccinatedAnimalsDto>await this.transformer.fromApi({ ...req.params, ...req.body });

      await this.service.invoke(dto);

      return res.status(204).send();
    } catch (error) {
      next(error);
    }
  }
}
