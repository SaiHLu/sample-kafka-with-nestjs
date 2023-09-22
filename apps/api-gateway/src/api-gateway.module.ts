import { Module } from '@nestjs/common'
import { ApiGatewayController } from './api-gateway.controller'
import { ApiGatewayService } from './api-gateway.service'
import { AuthModule } from './auth/auth.module'
import { PaymentModule } from './payment/payment.module'

@Module({
  imports: [AuthModule, PaymentModule],
  controllers: [ApiGatewayController],
  providers: [ApiGatewayService],
})
export class ApiGatewayModule {}
