import { Controller, ParseIntPipe, ValidationPipe } from '@nestjs/common'
import { AuthService } from './auth.service'
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices'
import { CreateUserDto } from '@app/common'

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @EventPattern('create_user')
  handleCreateUser(@Payload(ValidationPipe) data: CreateUserDto) {
    this.authService.createUser(data)
  }

  @MessagePattern('get_user')
  handleGetUser(@Payload('userId', ParseIntPipe) userId: number) {
    return this.authService.getUser(userId)
  }
}
