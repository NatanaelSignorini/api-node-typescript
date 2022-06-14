import { Router } from 'express';
//import middleware from 'src/middleware/autheticate'

//import AuthRoute from './AuthRoute'
//import RoleRoutes from './RoleRoutes'
//import UserRoutes from './UserRoutes'

const routes = Router();

// Endpoint raiz
routes.get('/', (req, res) => {
  return res.status(200).send('Hello World');
});

// Endpoit Routes
//routes.use('/', AuthRoute)
//routes.use('/', middleware.authenticateJWT, UserRoute)
//routes.use('/', RoleRoutes)
//routes.use('/', UserRoutes)

// Resposta padrão para quaisquer outras requisições:
routes.use((req, res) => {
  return res.status(404).send('Not Found');
});

export default routes;
