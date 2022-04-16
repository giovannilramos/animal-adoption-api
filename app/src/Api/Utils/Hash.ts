import bcrypt from 'bcrypt';
import { UnauthorizedException } from '../Exception/UnauthorizedException';
import { UserEntity } from '../../User/Storage/Entity/UserEntity';
import AuthDto from '../../Auth/Dto/AuthDto';
import jwt from 'jsonwebtoken';
import { PayloadDto } from '../../Auth/Dto/PayloadDto';

export default class Hash {
  static EXPIRES_TOKEN = Number(process.env.JWT_EXPIRES_MINUTES) * 60;

  private static async generateSalt(saltRound: number): Promise<string> {
    return await bcrypt.genSalt(saltRound);
  }

  public static async generateHash(password: string): Promise<string> {
    const salt = await Hash.generateSalt(10);
    return await bcrypt.hash(password, salt);
  }

  public static async validateHash(password: string, encrypted: string): Promise<void> {
    const validate = await bcrypt.compare(password, encrypted);
    if (!validate) {
      throw new UnauthorizedException();
    }
  }

  public static async generateJwt(userEntity: UserEntity, auth?: AuthDto): Promise<AuthDto> {
    if (!auth) {
      auth = new AuthDto({});
    }

    const payload: PayloadDto = { uuid: userEntity.uuid };
    auth.token = jwt.sign({ payload }, process.env.JWT_SECRET, {
      expiresIn: Hash.EXPIRES_TOKEN,
    });
    auth.tokenType = 'Bearer';
    auth.tokenExpiresIn = Hash.EXPIRES_TOKEN;

    return auth;
  }

  public static async validateJwt(token: string): Promise<void> {
    if (!token) {
      throw new UnauthorizedException();
    }
    try {
      jwt.verify(token, process.env.JWT_SECRET);
    } catch (e) {
      throw new UnauthorizedException();
    }
  }

  public static async getPayload(accessToken: string): Promise<PayloadDto> {
    const token = await this.getToken(accessToken);

    let result: any = null;

    try {
      result = jwt.verify(token, process.env.JWT_SECRET);
    } catch (e) {
      throw new UnauthorizedException();
    }

    if (!result || !result.payload) {
      throw new UnauthorizedException();
    }

    const payload = <PayloadDto>result.payload;
    if (!payload.uuid) {
      throw new UnauthorizedException();
    }
    payload.token = token;
    return Promise.resolve(payload);
  }

  private static async getToken(accessToken: string): Promise<string> {
    const parts = await this.validateInputToken(accessToken);

    const [tokenType, token] = parts;
    if (!/^Bearer$/i.test(tokenType)) {
      throw new UnauthorizedException();
    }
    if (token && token.split('.').length !== 3) {
      throw new UnauthorizedException();
    }

    return Promise.resolve(token);
  }

  private static async validateInputToken(accessToken: string): Promise<string[]> {
    if (!accessToken || accessToken === 'undefined') {
      throw new UnauthorizedException();
    }
    if (accessToken.length <= 0) {
      throw new UnauthorizedException();
    }

    const parts = accessToken.split(' ');
    if (parts && parts.length !== 2) {
      throw new UnauthorizedException();
    }
    return Promise.resolve(parts);
  }
}
