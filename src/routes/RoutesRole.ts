import { Router } from 'express'

import { GetAllRolesController } from '../controllers/role/GetAllRolesController'
import { CreateRolesController } from '../controllers/role/CreateRolesController'
import { UpdateRolesController } from '../controllers/role/UpdateRolesController'
import { DeleteRolesController } from '../controllers/role/DeleteRolesController'

const routes = Router()

routes.get('/roles', new GetAllRolesController().handle)
routes.post('/roles', new CreateRolesController().handle)
routes.patch('/roles/', new UpdateRolesController().handle)
routes.delete('/roles/', new DeleteRolesController().handle)

export default routes