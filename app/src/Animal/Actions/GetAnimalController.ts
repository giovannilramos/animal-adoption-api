import { IApiTransformer } from '../../Api/Transformers/IApiTransformer';
import { NextFunction, Request, Response } from 'express';
import { AnimalDto } from '../Dto/AnimalDto';
import { AnimalResponse } from '../Response/AnimalResponse';
import { GetAnimalService } from '../Services/GetAnimalService';

export class GetAnimalController {
  constructor(private readonly transformer: IApiTransformer<AnimalDto, AnimalResponse>, private readonly service: GetAnimalService) {}

  public async handle(req: Request, res: Response, next: NextFunction): Promise<Response> {
    try {
      let dto = <AnimalDto>await this.transformer.fromApi(req.params);
      dto = await this.service.invoke(dto);
      const response = await this.transformer.toApi(dto);
      return res.status(200).send(response);
    } catch (error) {
      next(error);
    }
  }
}
