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

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async login(@Request() req, @Res({ passthrough: true }) response) {
    let token = await this.authService.login(req.user);
    response.cookie('access_token', token.access_token, {
      maxAge: 1000 * 60 * 60,
    });

    return token;
  }

  @UseGuards(JwtAuthGuard)
  @Get('auth/test')
  a(@Req() request) {
    return 'holaaa';
  }
}
