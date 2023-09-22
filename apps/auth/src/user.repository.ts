import { Injectable } from '@nestjs/common'
import { User } from './entities/user.entity'

@Injectable()
export class UsersRepository {
  private readonly users: User[] = []

  save(user: User) {
    return this.users.push({ ...user, id: this.users.length + 1 })
  }

  findOne(id: number) {
    return this.users.find((u) => u.id === id) || null
  }
}
