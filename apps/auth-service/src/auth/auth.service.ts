import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor() {}

  async notifyDelay(notifyDto: { name: string }): Promise<object> {
    console.log('notify here mf opa opa');
    return notifyDto;
  }
}
