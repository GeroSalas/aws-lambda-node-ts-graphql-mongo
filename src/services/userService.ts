import { IUserRepository } from '../repositories/IUserRepository'
import { UserRepository } from '../repositories/userRepository'

export class UserService {
    private repository: IUserRepository

    constructor(repository: IUserRepository = new UserRepository()) {
        this.repository = repository
    }

    public test(): Promise<any> {
        return new Promise((resolve, reject) => {
            this.repository.test()
                .then((data) => resolve({ result: true, message: data }))
                .catch((error) => reject(error))
        })
    }
}
