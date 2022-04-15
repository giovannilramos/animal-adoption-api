import { CreateAnimalController } from './Actions/CreateAnimalController';
import { CreateAnimalService } from './Services/CreateAnimalService';
import { AnimalStorage } from './Storage/AnimalStorage';
import { CreateAnimalTransformer } from './Transformer/CreateAnimalTransformer';

// Storages
export const peopleStorage = new AnimalStorage();

// Transformers
const createPeopleTransformer = new CreateAnimalTransformer();

// Services
const createPeopleService = new CreateAnimalService(peopleStorage, createPeopleTransformer);

// Controllers
export const createPeopleController = new CreateAnimalController(createPeopleTransformer, createPeopleService);
