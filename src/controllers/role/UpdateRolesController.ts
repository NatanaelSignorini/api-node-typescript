import { Request, Response } from "express";

import { UpdateRolesService } from '../../services/role/UpdateRolesService'


export class UpdateRolesController {
  async handle(request: Request, response: Response) {
    const role_id = request.query.id as string;
    const { name, description } = request.body;
 
    const updateRoleService = new UpdateRolesService();
 
    const result = await updateRoleService.execute({
      role_id,
      name,
      description
    });
    
    return response.status(202).json(result);
 
  }
}
