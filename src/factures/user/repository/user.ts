import { ICrudReposity } from '../../../interfaces/Repository/repository'
import { fileUtils } from '../../../utils/file/file'
import { User } from '../interface/user'

export class RepositoryUser extends fileUtils implements ICrudReposity <User> {
  constructor (public readonly pathTheFile: string) {
    super(pathTheFile)
  }

  save (data: User): void {}

  delete (id: string): User {
    return { username: '', password: '' }
  }

  update (data: User): User {
    return { username: '', password: '' }
  }

  findById (id: string): User {
    return { username: '', password: '' }
  }

  find (): [User] {
    return [{ username: '', password: '' }]
  }
}
