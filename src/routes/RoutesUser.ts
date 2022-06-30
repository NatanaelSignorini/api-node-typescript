import { Router } from 'express'

import { GetAllUsersController } from '../controllers/user/GetAllUsersController'
import { CreateUsersController } from '../controllers/user/CreateUsersController'
import { UpdateUsersController } from '../controllers/user/UpdateUsersController'
import { DeleteUsersController } from '../controllers/user/DeleteUsersController'


const routes = Router()

routes.get('/users', new GetAllUsersController().handle)
routes.post('/users', new CreateUsersController().handle)
routes.patch('/users/', new UpdateUsersController().handle)
routes.delete('/users/', new DeleteUsersController().handle)


export default routes