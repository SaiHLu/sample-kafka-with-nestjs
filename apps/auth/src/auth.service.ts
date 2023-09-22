import { Injectable } from '@nestjs/common'
import { UsersRepository } from './user.repository'
import { CreateUserDto } from '@app/common'
import { User } from './entities/user.entity'

@Injectable()
export class AuthService {
  constructor(private readonly usersRepository: UsersRepository) {}

  createUser(data: CreateUserDto): void {
    const user = this.usersRepository.save(data)
    console.log('user created: ', user)
  }

  getUser(id: number): User {
    return this.usersRepository.findOne(id)
  }
}
