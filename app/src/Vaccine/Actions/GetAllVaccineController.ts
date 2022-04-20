import { IApiTransformer } from '../../Api/Transformers/IApiTransformer';
import { NextFunction, Request, Response } from 'express';
import { VaccineDto } from '../Dto/VaccineDto';
import { VaccineResponse } from '../Response/VaccineResponse';
import { GetAllVaccineService } from '../Services/GetAllVaccineService';

export class GetAllVaccineController {
  constructor(private readonly transformer: IApiTransformer<VaccineDto, VaccineResponse>, private readonly service: GetAllVaccineService) {}

  public async handle(req: Request, res: Response, next: NextFunction): Promise<Response> {
    try {
      const request = <VaccineDto>await this.transformer.fromApi(req.query);
      const dto = await this.service.invoke(request);
      const response = await this.transformer.toApi(dto);
      return res.status(200).send(response);
    } catch (error) {
      next(error);
    }
  }
}
