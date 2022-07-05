import { Router } from 'express'


import { AuthUserController } from '../controllers/auth/AuthUserController'



const routes = Router()


routes.post('/authenticate', new AuthUserController().handle)


export default routes