import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

import { UserCreateDto } from './dto/user-create.dto';

@Controller()
export class ProfileController {
  constructor(
    @Inject('PROFILE_SERVICE')
    private profileClient: ClientProxy,
  ) {}

  @Post('/register')
  createUser(@Body() dto: UserCreateDto) {
    return this.profileClient.send('create.profile', dto);
  }
}
