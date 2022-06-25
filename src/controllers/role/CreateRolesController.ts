import { Request, Response } from "express";
import { CreateRolesService } from "../../services/role/CreateRolesService"

export class CreateRolesController {
  async handle(request: Request, response: Response) {
    const { name, description} = request.body;
 
    const createRoleService = new CreateRolesService();
 
    const result = await createRoleService.execute({
      name,
      description
    });
    
    return response.status(201).json(result);
 
  }
}