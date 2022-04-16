import { RolesEnum } from '../../AccessController/Enums/RolesEnum';

export interface PayloadDto {
  uuid: string;
  active?: boolean;
  role?: RolesEnum;
  token?: string;
}
