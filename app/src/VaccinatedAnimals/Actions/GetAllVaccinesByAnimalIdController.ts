import { IApiTransformer } from '../../Api/Transformers/IApiTransformer';
import { NextFunction, Request, Response } from 'express';
import { VaccinatedAnimalsDto } from '../Dto/VaccinatedAnimalsDto';
import { VaccinatedAnimalsResponse } from '../Response/VaccinatedAnimalsResponse';
import { GetAllVaccinesByAnimalIdService } from '../Services/GetAllVaccinesByAnimalIdService';

export class GetAllVaccinesByAnimalIdController {
  constructor(private readonly transformer: IApiTransformer<VaccinatedAnimalsDto, VaccinatedAnimalsResponse>, private readonly service: GetAllVaccinesByAnimalIdService) {}

  public async handle(req: Request, res: Response, next: NextFunction): Promise<Response> {
    try {
      const request = <VaccinatedAnimalsDto>await this.transformer.fromApi(req.params);
      const dto = await this.service.invoke(request);
      const response = await this.transformer.toApi(dto);
      return res.status(200).send(response);
    } catch (error) {
      next(error);
    }
  }
}
