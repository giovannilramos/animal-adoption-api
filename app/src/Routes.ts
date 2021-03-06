import express, { NextFunction, Request, Response } from 'express';
import { createUserController, getAllUserController, getUserController, updateUserByIdController, updateUserController } from './User';
import { authController } from './Auth';
import { AuthenticatorMiddleware } from './Auth/Middleware/AuthMiddleware';
import { activatePeopleController, createPeopleController, deletePeopleController, getAllPeopleController, getPeopleController, inactivatePeopleController, updatePeopleController } from './People';
import { createAnimalController, getAllAnimalController, getAnimalController } from './Animal';
import { createVaccineController, getAllVaccineController, getVaccineController } from './Vaccine';
import { createAdoptionDataController, getAllAdoptionDataController, getAllAnimalsByPersonIdController } from './AdoptionData';
import { createVaccinatedAnimalsController, getAllVaccinatedAnimalsController, getAllVaccinesByAnimalIdController } from './VaccinatedAnimals';

const router = express.Router();

router.post('/auth/token', (req: Request, res: Response, next: NextFunction) => {
  return authController.handle(req, res, next);
});

//User
router.post('/user', (req: Request, res: Response, next: NextFunction) => {
  return createUserController.handle(req, res, next);
});
router.get('/user/all', [AuthenticatorMiddleware], (req: Request, res: Response, next: NextFunction) => {
  return getAllUserController.handle(req, res, next);
});
router.get('/user', [AuthenticatorMiddleware], (req: Request, res: Response, next: NextFunction) => {
  return getUserController.handle(req, res, next);
});
router.put('/user', [AuthenticatorMiddleware], (req: Request, res: Response, next: NextFunction) => {
  return updateUserController.handle(req, res, next);
});

router.put('/user/:id', [AuthenticatorMiddleware], (req: Request, res: Response, next: NextFunction) => {
  return updateUserByIdController.handle(req, res, next);
});

//People
router.post('/people', [AuthenticatorMiddleware], (req: Request, res: Response, next: NextFunction) => {
  return createPeopleController.handle(req, res, next);
});
router.patch('/people/:uuid/activate', [AuthenticatorMiddleware], (req: Request, res: Response, next: NextFunction) => {
  return activatePeopleController.handle(req, res, next);
});
router.patch('/people/:uuid/inactivate', [AuthenticatorMiddleware], (req: Request, res: Response, next: NextFunction) => {
  return inactivatePeopleController.handle(req, res, next);
});
router.get('/people', [AuthenticatorMiddleware], (req: Request, res: Response, next: NextFunction) => {
  return getAllPeopleController.handle(req, res, next);
});
router.get('/people/:uuid', [AuthenticatorMiddleware], (req: Request, res: Response, next: NextFunction) => {
  return getPeopleController.handle(req, res, next);
});
router.put('/people/:uuid', [AuthenticatorMiddleware], (req: Request, res: Response, next: NextFunction) => {
  return updatePeopleController.handle(req, res, next);
});
router.delete('/people/:uuid', [AuthenticatorMiddleware], (req: Request, res: Response, next: NextFunction) => {
  return deletePeopleController.handle(req, res, next);
});

//Animals
router.post('/animals', [AuthenticatorMiddleware], (req: Request, res: Response, next: NextFunction) => {
  return createAnimalController.handle(req, res, next);
});
router.get('/animals', [AuthenticatorMiddleware], (req: Request, res: Response, next: NextFunction) => {
  return getAllAnimalController.handle(req, res, next);
});
router.get('/animals/:uuid', [AuthenticatorMiddleware], (req: Request, res: Response, next: NextFunction) => {
  return getAnimalController.handle(req, res, next);
});

//Vaccines
router.post('/vaccines', [AuthenticatorMiddleware], (req: Request, res: Response, next: NextFunction) => {
  return createVaccineController.handle(req, res, next);
});
router.get('/vaccines', [AuthenticatorMiddleware], (req: Request, res: Response, next: NextFunction) => {
  return getAllVaccineController.handle(req, res, next);
});
router.get('/vaccines/:uuid', [AuthenticatorMiddleware], (req: Request, res: Response, next: NextFunction) => {
  return getVaccineController.handle(req, res, next);
});

//Adoption Data
router.post('/adoption-data/:uuid_animals', [AuthenticatorMiddleware], (req: Request, res: Response, next: NextFunction) => {
  return createAdoptionDataController.handle(req, res, next);
});
router.get('/adoption-data', [AuthenticatorMiddleware], (req: Request, res: Response, next: NextFunction) => {
  return getAllAdoptionDataController.handle(req, res, next);
});
router.get('/adoption-data/:cpf_person', [AuthenticatorMiddleware], (req: Request, res: Response, next: NextFunction) => {
  return getAllAnimalsByPersonIdController.handle(req, res, next);
});

//Vaccinated Animals
router.post('/vaccinated-animals/:uuid_animals', [AuthenticatorMiddleware], (req: Request, res: Response, next: NextFunction) => {
  return createVaccinatedAnimalsController.handle(req, res, next);
});
router.get('/vaccinated-animals', [AuthenticatorMiddleware], (req: Request, res: Response, next: NextFunction) => {
  return getAllVaccinatedAnimalsController.handle(req, res, next);
});
router.get('/vaccinated-animals/:uuid_animals', [AuthenticatorMiddleware], (req: Request, res: Response, next: NextFunction) => {
  return getAllVaccinesByAnimalIdController.handle(req, res, next);
});

export { router };
