import { CreateVaccinatedAnimalsController } from './Actions/CreateVaccinatedAnimalsController';
import { CreateVaccinatedAnimalsService } from './Services/CreateVaccinatedAnimalsService';
import { VaccinatedAnimalsStorage } from './Storage/VaccinatedAnimalsStorage';
import { CreateVaccinatedAnimalsTransformer } from './Transformer/CreateVaccinatedAnimalsTransformer';
import { AnimalStorage } from '../Animal/Storage/AnimalStorage';
import { VaccineStorage } from '../Vaccine/Storage/VaccineStorage';

// Storages
export const adoptionDataStorage = new VaccinatedAnimalsStorage();
export const vaccineStorage = new VaccineStorage();
export const animalStorage = new AnimalStorage();

// Transformers
const createVaccinatedAnimalsTransformer = new CreateVaccinatedAnimalsTransformer();

// Services
const createVaccinatedAnimalsService = new CreateVaccinatedAnimalsService(adoptionDataStorage, createVaccinatedAnimalsTransformer, vaccineStorage, animalStorage);

// Controllers
export const createVaccinatedAnimalsController = new CreateVaccinatedAnimalsController(createVaccinatedAnimalsTransformer, createVaccinatedAnimalsService);
