import { NestFactory } from '@nestjs/core'
import { ApiGatewayModule } from './api-gateway.module'
import { Logger } from '@nestjs/common'

async function bootstrap() {
  console.log('Here:')
  const app = await NestFactory.create(ApiGatewayModule)
  await app.listen(3000)

  Logger.log(`🚀 Application is running on: http://localhost:3000`)
}
bootstrap()
