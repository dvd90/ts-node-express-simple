import express from 'express';
import { ICustomRequest } from '../utils';

export const authMiddleware = [
  // authJWT,
  function (
    req: ICustomRequest,
    res: express.Response,
    next: express.NextFunction
  ): unknown {
    if (!req.user) {
      return res.status(401).json({ message: 'User not authenticated' });
    }

    next();
  }
];
