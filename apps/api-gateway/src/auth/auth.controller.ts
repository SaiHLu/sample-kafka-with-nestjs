import { Body, Controller, Post, ValidationPipe } from '@nestjs/common'
import { AuthService } from './auth.service'
import { CreateUserDto } from '@app/common'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('sign-up')
  createUser(@Body(ValidationPipe) body: CreateUserDto) {
    return this.authService.createUser(body)
  }
}
