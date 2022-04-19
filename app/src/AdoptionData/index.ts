import { CreateAdoptionDataController } from './Actions/CreateAdoptionDataController';
import { CreateAdoptionDataService } from './Services/CreateAdoptionDataService';
import { AdoptionDataStorage } from './Storage/AdoptionDataStorage';
import { CreateAdoptionDataTransformer } from './Transformer/CreateAdoptionDataTransformer';
import { PeopleStorage } from '../People/Storage/PeopleStorage';
import { AnimalStorage } from '../Animal/Storage/AnimalStorage';

// Storages
export const adoptionDataStorage = new AdoptionDataStorage();
export const peopleStorage = new PeopleStorage();
export const animalStorage = new AnimalStorage();

// Transformers
const createAdoptionDataTransformer = new CreateAdoptionDataTransformer();

// Services
const createAdoptionDataService = new CreateAdoptionDataService(adoptionDataStorage, createAdoptionDataTransformer, peopleStorage, animalStorage);

// Controllers
export const createAdoptionDataController = new CreateAdoptionDataController(createAdoptionDataTransformer, createAdoptionDataService);
