"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    createdAt: Date,
    username: String,
    password: String
});
userSchema.pre('save', function (next) {
    const document = this; // Document
    document.createdAt = Date.now();
    next();
});
exports.default = mongoose_1.model('User', userSchema);
//# sourceMappingURL=User.js.map