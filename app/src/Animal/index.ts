import { CreateAnimalController } from './Actions/CreateAnimalController';
import { CreateAnimalService } from './Services/CreateAnimalService';
import { AnimalStorage } from './Storage/AnimalStorage';
import { CreateAnimalTransformer } from './Transformer/CreateAnimalTransformer';
import { GetAllAnimalTransformer } from './Transformer/GetAllAnimalTransformer';
import { GetAllAnimalService } from './Services/GetAllAnimalService';
import { GetAllAnimalController } from './Actions/GetAllAnimalController';

// Storages
export const animalStorage = new AnimalStorage();

// Transformers
const createAnimalTransformer = new CreateAnimalTransformer();
const getAllAnimalTransformer = new GetAllAnimalTransformer();

// Services
const createAnimalService = new CreateAnimalService(animalStorage, createAnimalTransformer);
const getAllAnimalService = new GetAllAnimalService(animalStorage, getAllAnimalTransformer);

// Controllers
export const createAnimalController = new CreateAnimalController(createAnimalTransformer, createAnimalService);
export const getAllAnimalController = new GetAllAnimalController(getAllAnimalTransformer, getAllAnimalService);
