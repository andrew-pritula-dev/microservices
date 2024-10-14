import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

import { ProfileService } from './profile.service';
import { UserCreateDto } from './dto/user-create.dto';

@Controller()
export class ProfileController {
  constructor(private profileService: ProfileService) {}

  @MessagePattern('create.profile')
  createProfile(@Payload() dto: UserCreateDto) {
    return this.profileService.createProfile(dto);
  }
}
