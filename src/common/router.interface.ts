import { NextFunction, Response, Request, Router } from 'express';
import { IMiddleWare } from './middleware.interface';

export interface IControllerRouter {
	path: string;
	func: (req: Request, res: Response, next: NextFunction) => void;
	method: keyof Pick<Router, 'get' | 'post' | 'delete' | 'patch' | 'put'>;
	middlewares?: IMiddleWare[];
}
