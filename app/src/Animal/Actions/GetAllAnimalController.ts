import { IApiTransformer } from '../../Api/Transformers/IApiTransformer';
import { NextFunction, Request, Response } from 'express';
import { AnimalDto } from '../Dto/AnimalDto';
import { AnimalResponse } from '../Response/AnimalResponse';
import { GetAllAnimalService } from '../Services/GetAllAnimalService';

export class GetAllAnimalController {
  constructor(private readonly transformer: IApiTransformer<AnimalDto, AnimalResponse>, private readonly service: GetAllAnimalService) {}

  public async handle(req: Request, res: Response, next: NextFunction): Promise<Response> {
    try {
      const dto = await this.service.invoke();
      const response = await this.transformer.toApi(dto);
      return res.status(200).send(response);
    } catch (error) {
      next(error);
    }
  }
}
