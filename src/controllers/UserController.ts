import { UserService } from './../services/users/UserService';
import {Request, Response} from 'express'

export class UserController {
    async handle(request: Request, response: Response) {
      const userService = new UserService();
      
      const {username, password} = request.body;

      const user = await userService.execute({username, password})

      return response.json(user)
    } 
}