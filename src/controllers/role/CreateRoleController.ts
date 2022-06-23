import { Request, Response } from "express";
import { CreateRoleService } from "../../services/role/CreateRoleService"

export class CreateRolesController {
  async handle(request: Request, response: Response) {
    const { name } = request.body;
 
    const createRoleService = new CreateRoleService();
 
    const result = await createRoleService.execute({
      name
    });
    
    return response.status(201).json(result);
 
  }
}