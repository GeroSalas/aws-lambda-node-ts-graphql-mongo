"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const mongo_1 = require("../database/mongo");
// Reference: https://github.com/Thavarajan/Mangoose-Typescript-With-Repository-Pattern/blob/master/src/app/repository/base/RepositoryBase.ts
// Mongo Cheatsheet: https://docs.mongodb.com/manual/reference/mongo-shell/
class BaseRepository {
    constructor(schemaModel) {
        this._database = mongo_1.default.Instance;
        this._model = schemaModel;
    }
    create(item) {
        return this._model.create(item);
    }
    retrieve() {
        return this._model.find({}).exec();
    }
    update(_id, item) {
        return this._model.update({ _id }, item).exec();
    }
    delete(_id) {
        return this._model.remove({ _id }).exec();
    }
    findById(_id) {
        return this._model.findById(_id).exec();
    }
    toObjectId(_id) {
        return mongoose_1.Types.ObjectId.createFromHexString(_id);
    }
}
exports.BaseRepository = BaseRepository;
//# sourceMappingURL=baseRepository.js.map