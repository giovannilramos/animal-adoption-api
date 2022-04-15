import {AccessControl} from "accesscontrol";
import {RolesEnum} from "../Enums/RolesEnum";
import {ResourcesEnum} from "../Enums/ResourcesEnum";

const accessControl = new AccessControl();

const roles = () => {
    accessControl.grant(RolesEnum.BASIC)
        .read([ResourcesEnum.PRODUCT, ResourcesEnum.CAR, ResourcesEnum.USER])
        .update([ResourcesEnum.PRODUCT]);

    accessControl.grant(RolesEnum.SUPERVISOR)
        .extend(RolesEnum.BASIC)
        .create([ResourcesEnum.PRODUCT, ResourcesEnum.CAR, ResourcesEnum.PURCHASE])
        .update([ResourcesEnum.PRODUCT, ResourcesEnum.CAR]);

    accessControl.grant(RolesEnum.ADMIN)
        .extend(RolesEnum.SUPERVISOR)
        .create([ResourcesEnum.USER])
        .update([ResourcesEnum.USER])
        .delete([ResourcesEnum.PRODUCT, ResourcesEnum.CAR, ResourcesEnum.USER]);

    return accessControl;
}

export default roles();
