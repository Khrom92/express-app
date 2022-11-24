import { NextFunction, Response, Request } from 'express';
import { IMiddleWare } from './middleware.interface';
import { ClassConstructor, plainToClass } from 'class-transformer';
import { validate } from 'class-validator';

export class ValidateMiddleware implements IMiddleWare {
	constructor(private classValidator: ClassConstructor<{}>) {}

	execute({ body }: Request, res: Response, next: NextFunction): void {
		const instance = plainToClass(this.classValidator, body);

		validate(instance).then((errors) => {
			if (errors.length > 0) {
				res.status(400).send(errors);
			} else {
				next();
			}
		});
	}
}
