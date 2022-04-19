import { CreatePeopleController } from './Actions/CreatePeopleController';
import { CreatePeopleService } from './Services/CreatePeopleService';
import { PeopleStorage } from './Storage/PeopleStorage';
import { CreatePeopleTransformer } from './Transformer/CreatePeopleTransformer';
import { GetAllPeopleTransformer } from './Transformer/GetAllPeopleTransformer';
import { GetAllPeopleService } from './Services/GetAllPeopleService';
import { GetAllPeopleController } from './Actions/GetAllPeopleController';
import { GetPeopleTransformer } from './Transformer/GetPeopleTransformer';
import { GetPeopleService } from './Services/GetPeopleService';
import { GetPeopleController } from './Actions/GetPeopleController';

// Storages
export const peopleStorage = new PeopleStorage();

// Transformers
const createPeopleTransformer = new CreatePeopleTransformer();
const getAllPeopleTransformer = new GetAllPeopleTransformer();
const getPeopleTransformer = new GetPeopleTransformer();

// Services
const createPeopleService = new CreatePeopleService(peopleStorage, createPeopleTransformer);
const getAllPeopleService = new GetAllPeopleService(peopleStorage, getAllPeopleTransformer);
const getPeopleService = new GetPeopleService(peopleStorage, getPeopleTransformer);

// Controllers
export const createPeopleController = new CreatePeopleController(createPeopleTransformer, createPeopleService);
export const getAllPeopleController = new GetAllPeopleController(getAllPeopleTransformer, getAllPeopleService);
export const getPeopleController = new GetPeopleController(getPeopleTransformer, getPeopleService);
