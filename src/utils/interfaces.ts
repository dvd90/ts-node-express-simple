import express from 'express';
import request from 'request';

export type HTTPMethod =
  | 'all'
  | 'get'
  | 'post'
  | 'put'
  | 'delete'
  | 'patch'
  | 'options'
  | 'head';

export interface ICustomRequest extends express.Request {
  user?: any;
}

export interface indexedObject {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export type ExpressRoute = (
  req: ICustomRequest,
  res: express.Response,
  next?: express.NextFunction
) =>
  | Promise<express.Response<unknown>>
  | express.Response<unknown, Record<string, unknown>>
  | void
  | request.Request;
