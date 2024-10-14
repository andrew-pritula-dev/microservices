import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ConfigModule } from '@nestjs/config';

import { AuthModule } from '../auth/auth.module';
import { ProfileController } from './profile.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `./.env`,
    }),
    ClientsModule.register([
      {
        name: 'PROFILE_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: [process.env.RMQ_URL || 'amqp://rabbitmq:5672'],
          queue: process.env.RABBITMQ_PROFILE_QUEUE,
          queueOptions: {
            durable: false,
          },
        },
      },
    ]),
    AuthModule,
  ],
  controllers: [ProfileController],
})
export class ProfileModule {}
