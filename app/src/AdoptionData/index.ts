import { CreateAdoptionDataController } from './Actions/CreateAdoptionDataController';
import { CreateAdoptionDataService } from './Services/CreateAdoptionDataService';
import { AdoptionDataStorage } from './Storage/AdoptionDataStorage';
import { CreateAdoptionDataTransformer } from './Transformer/CreateAdoptionDataTransformer';
import { PeopleStorage } from '../People/Storage/PeopleStorage';
import { AnimalStorage } from '../Animal/Storage/AnimalStorage';
import { GetAllAnimalsByPersonIdTransformer } from './Transformer/GetAllAnimalsByPersonIdTransformer';
import { GetAllAdoptionDataTransformer } from './Transformer/GetAllAdoptionDataTransformer';
import { GetAllAdoptionDataService } from './Services/GetAllAdoptionDataService';
import { GetAllAnimalsByPersonIdService } from './Services/GetAllAnimalsByPersonIdService';
import { GetAllAdoptionDataController } from './Actions/GetAllAdoptionDataController';
import { GetAllAnimalsByPersonIdController } from './Actions/GetAllAnimalsByPersonIdController';

// Storages
export const adoptionDataStorage = new AdoptionDataStorage();
export const peopleStorage = new PeopleStorage();
export const animalStorage = new AnimalStorage();

// Transformers
const createAdoptionDataTransformer = new CreateAdoptionDataTransformer();
const getAllAdoptionDataTransformer = new GetAllAdoptionDataTransformer();
const getAllAnimalsByPersonIdTransformer = new GetAllAnimalsByPersonIdTransformer();

// Services
const createAdoptionDataService = new CreateAdoptionDataService(adoptionDataStorage, createAdoptionDataTransformer, peopleStorage, animalStorage);
const getAllAdoptionDataService = new GetAllAdoptionDataService(adoptionDataStorage, getAllAdoptionDataTransformer);
const getAllAnimalsByPersonIdService = new GetAllAnimalsByPersonIdService(adoptionDataStorage, getAllAnimalsByPersonIdTransformer, peopleStorage);

// Controllers
export const createAdoptionDataController = new CreateAdoptionDataController(createAdoptionDataTransformer, createAdoptionDataService);
export const getAllAdoptionDataController = new GetAllAdoptionDataController(getAllAdoptionDataTransformer, getAllAdoptionDataService);
export const getAllAnimalsByPersonIdController = new GetAllAnimalsByPersonIdController(getAllAnimalsByPersonIdTransformer, getAllAnimalsByPersonIdService);
