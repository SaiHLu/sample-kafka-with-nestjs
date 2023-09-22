import { MakePaymentDto } from '@app/common'
import { OnModuleInit } from '@nestjs/common'
import { Inject, Injectable } from '@nestjs/common'
import { ClientKafka } from '@nestjs/microservices'
import { User } from 'apps/auth/src/entities/user.entity'

@Injectable()
export class PaymentService implements OnModuleInit {
  constructor(
    @Inject('AUTH_MICROSERVICE') private readonly authClient: ClientKafka,
  ) {}

  onModuleInit() {
    this.authClient.subscribeToResponseOf('get_user')
  }

  makePayment(makePaymentDto: MakePaymentDto) {
    const { amount, userId } = makePaymentDto

    this.authClient
      .send('get_user', JSON.stringify({ userId }))
      .subscribe((user: User) => {
        console.log(`process payment for user ${user.name} - amount: ${amount}`)
      })
  }
}
