import {
  Controller,
  Get,
  Render,
  Request,
  Res,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { VistasService } from './vistas.service';

@Controller()
export class VistasController {
  constructor(private readonly appService: VistasService) {}

  @Get('/login')
  @Render('login')
  async root() {}

  @Get('/register')
  @Render('register')
  async rootRegister() {}

  @UseGuards(JwtAuthGuard)
  @Get('/home')
  @Render('index')
  async rootHome(@Request() req) {
    let nombre = req.cookies.username;
    return { ...(await this.appService.getHomeInfo()), nombre };
  }

  @Get('*')
  async logout(@Res() response) {
    return response.redirect('/login');
  }
}
