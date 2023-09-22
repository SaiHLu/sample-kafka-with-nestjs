import { MakePaymentDto } from '@app/common'
import { Body, Controller, Post, ValidationPipe } from '@nestjs/common'
import { PaymentService } from './payment.service'

@Controller('payments')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Post('pay')
  makePayment(@Body(ValidationPipe) makePaymentDto: MakePaymentDto) {
    return this.paymentService.makePayment(makePaymentDto)
  }
}
