import { CreateVaccineController } from './Actions/CreateVaccineController';
import { CreateVaccineService } from './Services/CreateVaccineService';
import { VaccineStorage } from './Storage/VaccineStorage';
import { CreateVaccineTransformer } from './Transformer/CreateVaccineTransformer';

// Storages
export const vaccineStorage = new VaccineStorage();

// Transformers
const createVaccineTransformer = new CreateVaccineTransformer();

// Services
const createVaccineService = new CreateVaccineService(vaccineStorage, createVaccineTransformer);

// Controllers
export const createVaccineController = new CreateVaccineController(createVaccineTransformer, createVaccineService);
