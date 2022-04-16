import { NextFunction, Request, Response } from 'express';
import { ResourcesEnum } from '../Enums/ResourcesEnum';
import GrantAccessService from '../Services/GrantAccessService';
import { ActionsEnum } from '../Enums/ActionsEnum';
import ContextRequestHelper from '../../Api/Helpers/ContextRequestHelper';

export const GrantAccess = (action: ActionsEnum, resource: ResourcesEnum) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { userRole } = await ContextRequestHelper.getContextRequest();
      await GrantAccessService.invoke(userRole, action, resource);
      next();
    } catch (error) {
      next(error);
    }
  };
};
