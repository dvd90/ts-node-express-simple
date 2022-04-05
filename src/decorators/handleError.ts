import { ExpressRoute, ICustomRequest, indexedObject } from '../utils';
import express from 'express';

/***
 * This will surround a function with error catching
 */
export function handleError(): (
  target: indexedObject,
  propertyName: string,
  descriptor?: TypedPropertyDescriptor<ExpressRoute>
) => void {
  return (
    target: indexedObject,
    propertyName: string,
    descriptor?: TypedPropertyDescriptor<ExpressRoute>
  ): void => {
    const originalFunction = (
      descriptor?.value || (target as ExpressRoute)
    ).bind(target);
    const factory = async (
      req: ICustomRequest,
      res: express.Response
    ): Promise<express.Response<unknown>> => {
      try {
        return await originalFunction(req, res);
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }
    };
    if (descriptor) {
      descriptor.value = factory;
    } else {
      target = factory;
    }
  };
}
