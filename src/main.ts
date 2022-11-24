import { Container, ContainerModule, interfaces } from 'inversify';
import { App } from './app';
import { ExceptionFilter } from './errors/exception.filter';
import { ILogger } from './logger/logger.interface';
import { LoggerService } from './logger/logger.service';
import { TYPES } from './types';
import { UserService } from './users/user.service';
import { IUserService } from './users/user.service interface';
import { UserController } from './users/users.controller';
import { IUserController } from './users/users.interface';

const appBindings = new ContainerModule((bind: interfaces.Bind) => {
	bind<ILogger>(TYPES.ILogger).to(LoggerService);
	bind<IUserController>(TYPES.UserController).to(UserController);
	bind<IUserService>(TYPES.UserService).to(UserService);
	bind<App>(TYPES.App).to(App);
	bind<ExceptionFilter>(TYPES.ExceptionFilter).to(ExceptionFilter);
});

function bootstrap() {
	const appContainer = new Container();
	appContainer.load(appBindings);
	const app = appContainer.get<App>(TYPES.App);

	app.init();
	return {
		app,
		appContainer,
	};
}

export const { app, appContainer } = bootstrap();
