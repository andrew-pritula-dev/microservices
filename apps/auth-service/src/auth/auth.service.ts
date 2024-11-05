import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AuthService {
  constructor(private readonly httpService: HttpService) {}

  async notifyDelay(notifyDto: { name: string }): Promise<string> {
    setTimeout(async () => {
      const response = await firstValueFrom(
        this.httpService.post(
          'https://webhook.site/2676f329-070a-40aa-8889-4edc0e4ba83f',
          notifyDto,
        ),
      );
      console.log(response.data);
    }, 24 * 60 * 60 * 1000);

    //try delay plugin

    return 'delayed';
  }
}
