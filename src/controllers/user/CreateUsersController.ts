import { Request, Response } from "express";
import { CreateUsersService } from "../../services/user/CreateUsersService"

export class CreateUsersController {
  async handle(request: Request, response: Response) {
    const { name, email, password, role_id} = request.body;
 
    const createUsersService = new CreateUsersService();
 
    const result = await createUsersService.execute({
      name,
      email,
      password,
      role_id
    });
    
    return response.status(201).json(result);
 
  }
}