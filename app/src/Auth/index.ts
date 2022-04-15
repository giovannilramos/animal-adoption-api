import AuthTransformer from "./Transformer/AuthTransformer";
import AuthService from "./Services/AuthService";
import {UserStorage} from "../User/Storage/UserStorage";
import AuthTokenController from "./Actions/AuthController";
import AuthValidationService from "./Services/AuthValidationService";

const userStorage = new UserStorage();

const authTransformer = new AuthTransformer();

const authService = new AuthService(userStorage);
const authValidateService = new AuthValidationService(userStorage);

const authController = new AuthTokenController(authTransformer, authService);

export {authController, authValidateService}
