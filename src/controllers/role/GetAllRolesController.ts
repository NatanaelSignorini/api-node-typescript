import { Request, Response } from "express";
import { GetAllRolesService } from "../../services/role/GetAllRolesService";


export class GetAllRolesController {
  async handle(request: Request, response: Response) {
    const service = new GetAllRolesService();
    const result = await service.execute();

    return response.status(200).json(result);
  } 
}