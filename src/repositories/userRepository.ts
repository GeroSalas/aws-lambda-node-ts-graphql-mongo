import { Document } from 'mongoose'
import { BaseRepository } from './baseRepository'
import { IUserRepository } from './IUserRepository'
import { IUser } from '../domain/models/IUser'
import UserSchema from '../database/schema/User'

export class UserRepository extends BaseRepository<IUser> implements IUserRepository {

    constructor() {
        super(UserSchema)
    }

    public test(): Promise<string> {
        return new Promise((resolve, reject) => {
            const testUser: any = { username: 'test', password: 'test123' }
            this.create([testUser])
                .then((data: Document[]) => {
                    const result = data[0].id
                    resolve(result)
                })
                .catch((err) => reject(err))
        })
    }
}
