import { Request, Response } from "express";
import { DeleteUsersService } from '../../services/user/DeleteUsersService';


export class DeleteUsersController {
  async handle(request: Request, response: Response) {
    const id = request.query.id as string;
 
    const service = new DeleteUsersService;
    console.log(id)
 
    const result = await service.execute({
      id
    });
 
    return response.status(204).json(result);
  } 
 
}