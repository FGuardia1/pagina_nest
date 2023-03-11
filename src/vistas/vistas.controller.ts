import { Controller, Get, Render } from '@nestjs/common';
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

  @Get('/home')
  @Render('index')
  async rootHome() {
    return await this.appService.getHomeInfo();
  }
}
