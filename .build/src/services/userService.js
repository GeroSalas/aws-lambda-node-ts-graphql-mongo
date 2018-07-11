"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userRepository_1 = require("../repositories/userRepository");
class UserService {
    constructor(repository = new userRepository_1.UserRepository()) {
        this.repository = repository;
    }
    test() {
        return new Promise((resolve, reject) => {
            this.repository.test()
                .then((data) => resolve({ result: true, message: data }))
                .catch((error) => reject(error));
        });
    }
}
exports.UserService = UserService;
//# sourceMappingURL=userService.js.map