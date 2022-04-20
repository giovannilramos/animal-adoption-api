import { CreateVaccineController } from './Actions/CreateVaccineController';
import { CreateVaccineService } from './Services/CreateVaccineService';
import { VaccineStorage } from './Storage/VaccineStorage';
import { CreateVaccineTransformer } from './Transformer/CreateVaccineTransformer';
import { GetAllVaccineTransformer } from './Transformer/GetAllVaccineTransformer';
import { GetVaccineTransformer } from './Transformer/GetVaccineTransformer';
import { GetAllVaccineService } from './Services/GetAllVaccineService';
import { GetVaccineService } from './Services/GetVaccineService';
import { GetAllVaccineController } from './Actions/GetAllVaccineController';
import { GetVaccineController } from './Actions/GetVaccineController';

// Storages
export const vaccineStorage = new VaccineStorage();

// Transformers
const createVaccineTransformer = new CreateVaccineTransformer();
const getAllVaccineTransformer = new GetAllVaccineTransformer();
const getVaccineTransformer = new GetVaccineTransformer();

// Services
const createVaccineService = new CreateVaccineService(vaccineStorage, createVaccineTransformer);
const getAllVaccineService = new GetAllVaccineService(vaccineStorage, getAllVaccineTransformer);
const getVaccineService = new GetVaccineService(vaccineStorage, getVaccineTransformer);

// Controllers
export const createVaccineController = new CreateVaccineController(createVaccineTransformer, createVaccineService);
export const getAllVaccineController = new GetAllVaccineController(getAllVaccineTransformer, getAllVaccineService);
export const getVaccineController = new GetVaccineController(getVaccineTransformer, getVaccineService);
