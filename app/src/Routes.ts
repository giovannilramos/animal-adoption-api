import express, { NextFunction, Request, Response } from 'express';
import { createUserController, getAllUserController, getUserController, updateUserByIdController, updateUserController } from './User';
import { authController } from './Auth';
import { AuthenticatorMiddleware } from './Auth/Middleware/AuthMiddleware';
import { activatePeopleController, createPeopleController, getAllPeopleController, getPeopleController, inactivatePeopleController } from './People';
import { createAnimalController, getAllAnimalController, getAnimalController } from './Animal';
import { createVaccineController } from './Vaccine';
import { createAdoptionDataController } from './AdoptionData';

const router = express.Router();

router.post('/auth/token', (req: Request, res: Response, next: NextFunction) => {
  return authController.handle(req, res, next);
});

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
router.patch(
  '/people/:uuid/activate',
  /*[AuthenticatorMiddleware],*/ (req: Request, res: Response, next: NextFunction) => {
    return activatePeopleController.handle(req, res, next);
  }
);
router.patch(
  '/people/:uuid/inactivate',
  /*[AuthenticatorMiddleware],*/ (req: Request, res: Response, next: NextFunction) => {
    return inactivatePeopleController.handle(req, res, next);
  }
);
router.get('/people', [AuthenticatorMiddleware], (req: Request, res: Response, next: NextFunction) => {
  return getAllPeopleController.handle(req, res, next);
});
router.get('/people/:uuid', [AuthenticatorMiddleware], (req: Request, res: Response, next: NextFunction) => {
  return getPeopleController.handle(req, res, next);
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

//Adoption Data
router.post('/adoption-data/:uuid_animals', [AuthenticatorMiddleware], (req: Request, res: Response, next: NextFunction) => {
  return createAdoptionDataController.handle(req, res, next);
});

export { router };
