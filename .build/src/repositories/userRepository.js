"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baseRepository_1 = require("./baseRepository");
const User_1 = require("../database/schema/User");
class UserRepository extends baseRepository_1.BaseRepository {
    constructor() {
        super(User_1.default);
    }
    test() {
        return new Promise((resolve, reject) => {
            const testUser = { username: 'test', password: 'test123' };
            this.create([testUser])
                .then((data) => {
                const result = data[0].id;
                resolve(result);
            })
                .catch((err) => reject(err));
        });
    }
}
exports.UserRepository = UserRepository;
//# sourceMappingURL=userRepository.js.map