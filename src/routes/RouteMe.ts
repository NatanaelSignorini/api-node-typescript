import { Router } from 'express'

import { GetAllUsersController } from '../controllers/user/GetAllUsersController'


const routes = Router()

routes.get('/me', new GetAllUsersController().handle)



export default routes