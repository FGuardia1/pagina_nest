import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  Redirect,
  Res,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './users.model';
import * as bcrypt from 'bcrypt';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/signup')
  async createUser(
    @Body('password') password: string,
    @Body('username') username: string,
    @Res() res,
  ) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await this.usersService.createUser(username, hashedPassword);
    return res.redirect('/login');
  }
}
