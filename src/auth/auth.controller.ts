import {
  Controller,
  Request,
  Post,
  UseGuards,
  Get,
  Headers,
  Res,
  Req,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('/login')
  async login(@Request() req, @Res({ passthrough: true }) response) {
    let token = await this.authService.login(req.user);
    response.cookie('access_token', token.access_token, {
      maxAge: 1000 * 60 * 60,
    });
    response.cookie('username', req.user.username, {
      maxAge: 1000 * 60 * 60,
    });
    return response.redirect('/home');
  }

  @Get('/logout')
  async logout(@Res({ passthrough: true }) response) {
    response.cookie('access_token', '', { expires: new Date() });
    response.cookie('username', '', { expires: new Date() });
    return response.redirect('/login');
  }
}
