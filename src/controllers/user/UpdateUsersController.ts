import { Request, Response } from "express";

import { UpdateUsersService } from '../../services/user/UpdateUsersService'


export class UpdateUsersController {
  async handle(request: Request, response: Response) {
    const user_id = request.query.id as string;
    const { name, email, password, role_id } = request.body;
 
    const updateRoleService = new UpdateUsersService();
 
    const result = await updateRoleService.execute({
      user_id,
      name,
      email,
      password,
      role_id
    });
    
    return response.status(202).json(result);
 
  }
}
