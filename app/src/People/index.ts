import { CreatePeopleController } from './Actions/CreatePeopleController';
import { CreatePeopleService } from './Services/CreatePeopleService';
import { PeopleStorage } from './Storage/PeopleStorage';
import { CreatePeopleTransformer } from './Transformer/CreatePeopleTransformer';

// Storages
export const peopleStorage = new PeopleStorage();

// Transformers
const createPeopleTransformer = new CreatePeopleTransformer();

// Services
const createPeopleService = new CreatePeopleService(peopleStorage, createPeopleTransformer);

// Controllers
export const createPeopleController = new CreatePeopleController(createPeopleTransformer, createPeopleService);
