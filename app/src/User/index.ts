import { UserStorage } from './Storage/UserStorage';
import { CreateUserTransformer } from './Transformer/CreateUserTransformer';
import { GetUserTransformer } from './Transformer/GetUserTransformer';
import { CreateUserController } from './Actions/CreateUserController';
import { CreateUserService } from './Services/CreateUserService';
import { GetUserService } from './Services/GetUserService';
import { GetUserController } from './Actions/GetUserController';
import { GetAllUserTransformer } from './Transformer/GetAllUserTransformer';
import { GetAllUserService } from './Services/GetAllUserService';
import { GetAllUserController } from './Actions/GetAllUserController';
import { UpdateUserTransformer } from './Transformer/UpdateUserTransformer';
import { UpdateUserService } from './Services/UpdateUserService';
import { UpdateUserController } from './Actions/UpdateUserController';
import { UpdateUserByIdTransformer } from './Transformer/UpdateUserByIdTransformer';
import { UpdateUserByIdController } from './Actions/UpdateUserByIdController';

const userStorage = new UserStorage();

const createUserTransformer = new CreateUserTransformer();
const getUserTransformer = new GetUserTransformer();
const getAllUserTransformer = new GetAllUserTransformer();
const updateUserTransformer = new UpdateUserTransformer();
const updateUserByIdTransformer = new UpdateUserByIdTransformer();

const createUserService = new CreateUserService(userStorage, createUserTransformer);
const getUserService = new GetUserService(userStorage);
const getAllUserService = new GetAllUserService(userStorage);
const updateUserService = new UpdateUserService(userStorage);

const createUserController = new CreateUserController(createUserTransformer, createUserService);
const getUserController = new GetUserController(getUserTransformer, getUserService);
const getAllUserController = new GetAllUserController(getAllUserTransformer, getAllUserService);
const updateUserController = new UpdateUserController(updateUserTransformer, updateUserService);
const updateUserByIdController = new UpdateUserByIdController(updateUserByIdTransformer, updateUserService);

export { createUserController, getUserController, getAllUserController, updateUserController, updateUserByIdController };
