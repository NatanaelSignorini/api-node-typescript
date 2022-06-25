import { Request, Response } from "express";
import { DeleteRolesService } from '../../services/role/DeleteRolesService';


export class DeleteRolesController {
  async handle(request: Request, response: Response) {
    const role_id = request.query.id as string;
 
    const service = new DeleteRolesService;
 
    const result = await service.execute({
      role_id
    });
 
    return response.status(204).json(result);
  } 
 
}