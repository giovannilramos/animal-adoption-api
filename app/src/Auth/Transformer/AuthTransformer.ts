import { ClassValidator } from '../../Api/Utils/ClassValidator';
import AuthRequest from '../Request/AuthRequest';
import AuthResponse from '../Response/AuthResponse';
import AuthDto from '../Dto/AuthDto';
import { IApiTransformer } from '../../Api/Transformers/IApiTransformer';

export default class AuthTransformer implements IApiTransformer<AuthDto, AuthResponse> {
  public async fromApi(object: any, headers?: any): Promise<AuthDto> {
    const requestObject: AuthRequest = await ClassValidator.transformerToModel(AuthRequest, object);

    await ClassValidator.validateInput(requestObject);

    return new AuthDto({
      email: requestObject.username,
      password: requestObject.password,
    });
  }

  public async toApi(auth: AuthDto): Promise<AuthResponse> {
    const authResponse: AuthResponse = new AuthResponse();
    authResponse.accessToken = auth.token;
    authResponse.tokenType = auth.tokenType;
    authResponse.expiresIn = auth.tokenExpiresIn;

    return authResponse;
  }
}
