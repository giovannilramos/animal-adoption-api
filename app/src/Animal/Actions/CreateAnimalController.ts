import { NextFunction, Request, Response } from 'express';
import { IApiTransformer } from '../../Api/Transformers/IApiTransformer';
import { AnimalDto } from '../Dto/AnimalDto';
import { CreateAnimalService } from '../Services/CreateAnimalService';

export class CreateAnimalController {
  constructor(private readonly transformer: IApiTransformer<AnimalDto, any>, private readonly service: CreateAnimalService) {}

  public async handle(req: Request, res: Response, next: NextFunction): Promise<Response> {
    try {
      const dto = <AnimalDto>await this.transformer.fromApi(req.body);

      await this.service.invoke(dto);

      return res.status(204).send();
    } catch (error) {
      next(error);
    }
  }
}
