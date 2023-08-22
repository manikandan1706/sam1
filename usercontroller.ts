import { IUserService } from '../services/IUserService';
import { injectable, inject } from 'inversify';

@injectable()
export class UserController {
    constructor(@inject('IUserService') private userService: IUserService) {}

    async getAllUsers(request: any, response: any) {
        const users = await this.userService.getAllUsers();
        return response.response(users);
    }
}