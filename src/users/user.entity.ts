import { UserRegisterDto } from './dto/user-register.dto';
import { hash } from 'bcryptjs';

export class User {
	private _password: string;

	constructor(private readonly _email: string, private readonly _name: string) {}

	get email(): string {
		return this._email;
	}

	get password(): string {
		return this._password;
	}

	public async setPassword(password: string): Promise<void> {
		this._password = await hash(password, 10);
		console.log(this._password, 'password');
	}

	get name(): string {
		return this._name;
	}

	public static async fromDto(userRegisterDto: UserRegisterDto): Promise<User> {
		const newUser = new User(userRegisterDto.email, userRegisterDto.name);
		await newUser.setPassword(userRegisterDto.password);
		console.log(newUser.password, 'newUser');

		return newUser;
	}
}
