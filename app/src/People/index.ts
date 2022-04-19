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
import { ActivatePeopleController } from './Actions/ActivatePeopleController';
import { ActivatePeopleService } from './Services/ActivatePeopleService';
import { ActivatePeopleTransformer } from './Transformer/ActivatePeopleTransformer';
import { InactivatePeopleController } from './Actions/InactivatePeopleController';
import { InactivatePeopleService } from './Services/InactivatePeopleService';
import { InactivatePeopleTransformer } from './Transformer/InactivatePeopleTransformer';

// Storages
export const peopleStorage = new PeopleStorage();

// Transformers
const activatePeopleTransformer = new ActivatePeopleTransformer();
const inactivatePeopleTransformer = new InactivatePeopleTransformer();
const createPeopleTransformer = new CreatePeopleTransformer();
const getAllPeopleTransformer = new GetAllPeopleTransformer();
const getPeopleTransformer = new GetPeopleTransformer();

// Services
const activatePeopleService = new ActivatePeopleService(peopleStorage);
const inactivatePeopleService = new InactivatePeopleService(peopleStorage);
const createPeopleService = new CreatePeopleService(peopleStorage, createPeopleTransformer);
const getAllPeopleService = new GetAllPeopleService(peopleStorage, getAllPeopleTransformer);
const getPeopleService = new GetPeopleService(peopleStorage, getPeopleTransformer);

// Controllers
export const activatePeopleController = new ActivatePeopleController(activatePeopleTransformer, activatePeopleService);
export const inactivatePeopleController = new InactivatePeopleController(inactivatePeopleTransformer, inactivatePeopleService);
export const createPeopleController = new CreatePeopleController(createPeopleTransformer, createPeopleService);
export const getAllPeopleController = new GetAllPeopleController(getAllPeopleTransformer, getAllPeopleService);
export const getPeopleController = new GetPeopleController(getPeopleTransformer, getPeopleService);
