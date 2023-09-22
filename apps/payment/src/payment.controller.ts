import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common'
import { PaymentService } from './payment.service'
import { MakePaymentDto } from '@app/common'
import { EventPattern } from '@nestjs/microservices'

@Controller('payments')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @EventPattern('process_payment')
  makePayment(@Body(ValidationPipe) body: MakePaymentDto) {
    return this.paymentService.makePayment(body)
  }
}
