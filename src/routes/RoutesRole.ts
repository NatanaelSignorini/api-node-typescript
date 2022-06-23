import { Router } from 'express'

import { GetAllRolesController } from '../controllers/role/GetAllRoleController'
import { CreateRolesController } from '../controllers/role/CreateRoleController'
import { UpdateRolesController } from '../controllers/role/UpdateRoleController'
import { DeleteRolesController } from '../controllers/role/DeleteRoleController'

const routes = Router()

//routes.get('/roles', new GetAllRolesController().handle)
routes.post('/roles', new CreateRolesController().handle)
//routes.patch('/roles/:id', new UpdateRolesController().handle)
//routes.delete('/roles/:id', new DeleteRolesController().handle)

export default routes