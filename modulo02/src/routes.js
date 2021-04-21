import { Router } from 'express';
import UserController from './app/controllers/UserController';

const routes = new Router();

rout.post('/users', UserController.storer);
export default routes;
