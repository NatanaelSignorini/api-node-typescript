
import { Request, Response } from "express";

import { GetAllUsersService } from "../../services/user/GetAllUsersService";

export class GetAllUsersController {
  async handle(request: Request, response: Response) {
    const service = new GetAllUsersService();
    const result = await service.execute();

    return response.status(200).json(result);
  } 
}