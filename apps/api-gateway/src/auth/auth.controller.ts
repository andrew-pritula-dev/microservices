import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller()
export class AuthController {
  // constructor(
  //   @Inject('AUTH_SERVICE')
  //   private authClient: ClientProxy,
  // ) {}
  //
  // @Post('/login')
  // login(@Body() user: { email: string; password: string }) {
  //   return this.authClient.send('login.user', user);
  // }
}
