import dotenv from 'dotenv';

dotenv.config();
import express, { Express } from 'express';
import { initCORS, initErrorHandler } from '../handlers';
import initRoutes from '../routes';
import morganBody from 'morgan-body';

// Init BD if needed

export default async function (): Promise<Express> {
  const app = express();
  app.use(express.json());

  app.set('port', process.env.PORT || 8000);

  if (process.env.NODE_ENV !== 'production') {
    morganBody(app);
  }

  // CORS
  initCORS(app);

  // Initialize Routes
  initRoutes(app);

  // Initialize Error Handlers
  initErrorHandler(app);

  return app;
}
