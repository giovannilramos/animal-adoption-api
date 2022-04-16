import Hash from '../../Api/Utils/Hash';
import { PayloadDto } from '../Dto/PayloadDto';
import { IUserStorage } from '../../User/Storage/IUserStorage';
import { UnauthorizedException } from '../../Api/Exception/UnauthorizedException';

export default class AuthValidationService {
  constructor(private readonly storage: IUserStorage) {}

  public async invoke(payload: PayloadDto): Promise<any> {
    const entity = await this.storage.findByUuid(payload.uuid);
    if (!entity) {
      throw new UnauthorizedException();
    }
    return await Hash.validateJwt(payload.token);
  }
}
