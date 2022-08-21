import { jwtGuard } from './../auth/guard/jwt.guard';
import {
  Controller,
  Get,
  UseGuards,
} from '@nestjs/common';
import { GetUser } from '../auth/decorator';
import { User } from '@prisma/client';

@UseGuards(jwtGuard)
@Controller('users')
export class UserController {
  @Get('profile')
  getProfile(@GetUser() user: User) {
    return user;
  }
}
