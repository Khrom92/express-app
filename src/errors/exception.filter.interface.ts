import { NextFunction, Response, Request, Router } from 'express';

export interface IExceptionFilter {
	catch: (err: Error, req: Request, res: Response, next: NextFunction) => void;
}
