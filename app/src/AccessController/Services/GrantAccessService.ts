import AccessControllerRoles from '../middleware/AccessControllerRoles';
import { AccessDeniedException } from '../../Api/Exception/AccessDeniedException';
import { ResourcesEnum } from '../Enums/ResourcesEnum';
import { RolesEnum } from '../Enums/RolesEnum';
import { ActionsEnum } from '../Enums/ActionsEnum';

export default class GrantAccessService {
  public static async invoke(role: RolesEnum, action: ActionsEnum, resource: ResourcesEnum): Promise<void> {
    const permission = AccessControllerRoles.can(role)[action](resource);
    if (!permission || !permission.granted) {
      throw new AccessDeniedException();
    }
  }
}
