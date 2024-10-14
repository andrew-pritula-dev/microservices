import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

import { AuthService } from './auth.service';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @MessagePattern('notification.delay')
  notifyUser(notifyDto: { name: string }): Promise<object> {
    console.log('handle routes');
    return this.authService.notifyDelay(notifyDto);
  }
}
