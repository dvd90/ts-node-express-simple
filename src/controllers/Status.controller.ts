import express from 'express';

import { ICustomRequest } from '../utils';
import { handleError, route } from '../decorators';
import { Routable } from '../routes/routable';

// noinspection JSUnusedGlobalSymbols
export class StatusController extends Routable {
  constructor() {
    super('/status');
  }
  /**
   * @desc get status server
   * @access Public
   */
  @route('get', '/')
  @handleError()
  async show(
    req: ICustomRequest,
    res: express.Response
  ): Promise<express.Response<unknown>> {
    return res.status(200);
  }
}
