import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
const useSwagger = (app) => {
  const config = new DocumentBuilder()
    .setTitle('文档')
    .setDescription('接口文档描述')
    .setVersion('1.0.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
};

/**
 * 获取端口号
 */
const getPort = (app) => {
  const configService = app.get(ConfigService);
  return configService.get('http.port') || '3000';
};

export { useSwagger, getPort };
