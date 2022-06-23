import express,{ Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import cors from 'cors';
import helmet from 'helmet';

import routes from '@src/routes/routes';


class Server {
  public express: express.Application;

  public constructor() {
    this.express = express();
    this.middleware();
    this.routes();
    
    // to com erro aqui
    this.initializeErrorHandling();
  }

  private middleware(): void {
    this.express.use(helmet());
    this.express.use(express.json());
    this.express.use(express.urlencoded({ extended: true }));
    this.express.use(cors());
  }

  private routes(): void {
    this.express.use(routes);
  }

  // to com erro aqui 
  private initializeErrorHandling(err: Error, req: Request, res: Response, next: NextFunction){
    if(err instanceof Error){
      return res.status(400).json({
        error: err.message
      })
    }

    return res.status(500).json({
      status: 'error',
      message: 'Internal Server Error.'
    })

  }

        

       
      
   
  

}

export default new Server().express;
