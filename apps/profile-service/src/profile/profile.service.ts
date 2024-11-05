import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ClientProxy } from '@nestjs/microservices';
import { Repository } from 'typeorm';

import { ProfileEntity } from './entity/profile.entity';
import { UserCreateDto } from './dto/user-create.dto';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(ProfileEntity)
    private userProfileRepository: Repository<ProfileEntity>,
    @Inject('AUTH_SERVICE') private authClient: ClientProxy,
  ) {}

  async createProfile(dto: UserCreateDto): Promise<ProfileEntity> {
    const user_profile = await this.userProfileRepository.save({
      name: dto.name,
    });

    await firstValueFrom(this.authClient.send('notification.delay', dto));

    return user_profile;
  }
}
