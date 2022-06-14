import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import routes from '@src/routes/routes';

class Server {
  public express: express.Application;

  public constructor() {
    this.express = express();
    this.middleware();
    this.routes();
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
}

export default new Server().express;
