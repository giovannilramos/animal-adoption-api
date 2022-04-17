import { NextFunction, Request, Response } from 'express';
import { authValidateService } from '../index';
import { UnauthorizedException } from '../../Api/Exception/UnauthorizedException';
import Hash from '../../Api/Utils/Hash';
import ContextRequestHelper from '../../Api/Helpers/ContextRequestHelper';

export const AuthenticatorMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const requestId = req.headers['x-request-id'];
    const accessToken: string = req.headers.authorization || String(req.query.token) || String(req.query.accessToken);
    const authorizationPayload = await Hash.getPayload(accessToken);
    await authValidateService.invoke(authorizationPayload);
    ContextRequestHelper.setContextRequest({
      requestId: requestId && String(requestId),
      userId: authorizationPayload.uuid,
    });
    next();
  } catch (error) {
    next(new UnauthorizedException());
  }
};
