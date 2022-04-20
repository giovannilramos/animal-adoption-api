import { IApiTransformer } from '../../Api/Transformers/IApiTransformer';
import { NextFunction, Request, Response } from 'express';
import { VaccineDto } from '../Dto/VaccineDto';
import { VaccineResponse } from '../Response/VaccineResponse';
import { GetVaccineService } from '../Services/GetVaccineService';

export class GetVaccineController {
  constructor(private readonly transformer: IApiTransformer<VaccineDto, VaccineResponse>, private readonly service: GetVaccineService) {}

  public async handle(req: Request, res: Response, next: NextFunction): Promise<Response> {
    try {
      let dto = <VaccineDto>await this.transformer.fromApi(req.params);
      dto = await this.service.invoke(dto);
      const response = await this.transformer.toApi(dto);
      return res.status(200).send(response);
    } catch (error) {
      next(error);
    }
  }
}
