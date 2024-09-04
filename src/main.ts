import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { useSwagger, getPort } from './hooks/initHooks';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  useSwagger(app);
  await app.listen(getPort(app));
  console.log(await app.getUrl());
}
bootstrap();
