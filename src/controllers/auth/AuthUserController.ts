import { Request, Response } from "express";
import { AuthUserService } from '../../services/auth/AuthUserService'

class AuthUserController{
  async handle(Request: Request, Response: Response){
    const { email, password } = Request.body;

    const authUserService = new AuthUserService();

    const auth = await authUserService.execute({
      email,
      password
    })
    return Response.json(auth);
  }
}

export{AuthUserController}