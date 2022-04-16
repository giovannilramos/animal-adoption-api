import { CreateAnimalController } from './Actions/CreateAnimalController';
import { CreateAnimalService } from './Services/CreateAnimalService';
import { AnimalStorage } from './Storage/AnimalStorage';
import { CreateAnimalTransformer } from './Transformer/CreateAnimalTransformer';

// Storages
export const animalStorage = new AnimalStorage();

// Transformers
const createAnimalTransformer = new CreateAnimalTransformer();

// Services
const createAnimalService = new CreateAnimalService(animalStorage, createAnimalTransformer);

// Controllers
export const createAnimalController = new CreateAnimalController(createAnimalTransformer, createAnimalService);
