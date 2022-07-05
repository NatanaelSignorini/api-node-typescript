import { Router } from 'express';
import {isAuthenticated} from '../middlewares/isAuthenticated'

import AuthRoute from './RouteAuth'
import RoleRoutes from './RoutesRole'
import UserRoutes from './RoutesUser'
import MeRoute from './RouteMe'

const routes = Router();

// Endpoint raiz
routes.get('/', (req, res) => {
  return res.status(200).send('Hello World');
});

// Endpoit Routes
routes.use('/', AuthRoute)
routes.use('/', isAuthenticated, MeRoute)
routes.use('/', RoleRoutes)
routes.use('/', UserRoutes)

// Resposta padrão para quaisquer outras requisições que não sao validas:
routes.use((req, res) => {
  return res.status(404).send('Not Found');
});

export default routes;
