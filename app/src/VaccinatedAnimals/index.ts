import { CreateVaccinatedAnimalsController } from './Actions/CreateVaccinatedAnimalsController';
import { CreateVaccinatedAnimalsService } from './Services/CreateVaccinatedAnimalsService';
import { VaccinatedAnimalsStorage } from './Storage/VaccinatedAnimalsStorage';
import { CreateVaccinatedAnimalsTransformer } from './Transformer/CreateVaccinatedAnimalsTransformer';
import { AnimalStorage } from '../Animal/Storage/AnimalStorage';
import { VaccineStorage } from '../Vaccine/Storage/VaccineStorage';
import { GetAllVaccinatedAnimalsTransformer } from './Transformer/GetAllVaccinatedAnimalsTransformer';
import { GetAllVaccinatedAnimalsService } from './Services/GetAllVaccinatedAnimalsService';
import { GetAllVaccinatedAnimalsController } from './Actions/GetAllVaccinatedAnimalsController';
import { GetAllVaccinesByAnimalIdTransformer } from './Transformer/GetAllVaccinesByAnimalIdTransformer';
import { GetAllVaccinesByAnimalIdService } from './Services/GetAllVaccinesByAnimalIdService';
import { GetAllVaccinesByAnimalIdController } from './Actions/GetAllVaccinesByAnimalIdController';

// Storages
export const adoptionDataStorage = new VaccinatedAnimalsStorage();
export const vaccineStorage = new VaccineStorage();
export const animalStorage = new AnimalStorage();

// Transformers
const createVaccinatedAnimalsTransformer = new CreateVaccinatedAnimalsTransformer();
const getAllVaccinatedAnimalsTransformer = new GetAllVaccinatedAnimalsTransformer();
const getAllVaccinesByAnimalIdTransformer = new GetAllVaccinesByAnimalIdTransformer();

// Services
const createVaccinatedAnimalsService = new CreateVaccinatedAnimalsService(adoptionDataStorage, createVaccinatedAnimalsTransformer, vaccineStorage, animalStorage);
const getAllVaccinatedAnimalsService = new GetAllVaccinatedAnimalsService(adoptionDataStorage, getAllVaccinatedAnimalsTransformer);
const getAllVaccinesByAnimalIdService = new GetAllVaccinesByAnimalIdService(adoptionDataStorage, getAllVaccinesByAnimalIdTransformer, animalStorage);

// Controllers
export const createVaccinatedAnimalsController = new CreateVaccinatedAnimalsController(createVaccinatedAnimalsTransformer, createVaccinatedAnimalsService);
export const getAllVaccinatedAnimalsController = new GetAllVaccinatedAnimalsController(getAllVaccinatedAnimalsTransformer, getAllVaccinatedAnimalsService);
export const getAllVaccinesByAnimalIdController = new GetAllVaccinesByAnimalIdController(getAllVaccinesByAnimalIdTransformer, getAllVaccinesByAnimalIdService);
