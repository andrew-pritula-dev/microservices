import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const microservice = app.connectMicroservice(
    {
      transport: Transport.RMQ,
      options: {
        urls: [process.env.RMQ_URL || 'amqp://rabbitmq:5672'],
        queue: process.env.RABBITMQ_AUTH_QUEUE || 'auth_queue',
        queueOptions: {
          durable: false,
        },
        socketOptions: {
          heartbeatIntervalInSeconds: 60,
        },
      },
    },
    { inheritAppConfig: true },
  );
  await app.startAllMicroservices();
  await app.listen(process.env.PORT || 4000);
}

bootstrap();
