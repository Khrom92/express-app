import { UserRegisterDto } from './dto/user-register.dto';
import { IUserService } from './user.service interface';
import { inject, injectable } from 'inversify';
import { UserLoginDto } from './dto/user-login.dto';
import { User } from './user.entity';

@injectable()
export class UserService implements IUserService {
	async createUser(dto: UserRegisterDto) {
		console.log('createUser');

		const newUser = await User.fromDto(dto);

		return null;
	}

	async validateUser(dto: UserLoginDto) {
		console.log('validateUser');

		return true;
	}
}
