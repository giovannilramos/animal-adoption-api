import {IUserStorage} from "../../User/Storage/IUserStorage";
import AuthDto from "../Dto/AuthDto";
import {UnauthorizedException} from "../../Api/Exception/UnauthorizedException";
import Hash from "../../Api/Utils/Hash";


export default class AuthService {
    constructor(private readonly storage: IUserStorage) {
    }

    public async invoke(auth: AuthDto): Promise<AuthDto> {
        const userEntity = await this.storage.findByEmail(auth.email);
        if (!userEntity) {
            throw new UnauthorizedException();
        }

        await Hash.validateHash(auth.password, userEntity.password);
        auth = await Hash.generateJwt(userEntity, auth);

        return auth;
    }
}
