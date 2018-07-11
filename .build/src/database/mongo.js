"use strict";
/* istanbul ignore file */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const logging_1 = require("../utils/logging");
const config = require('config');
const logger = new logging_1.default(`${__filename} connect()`);
// See API docs: http://mongoosejs.com/docs/lambda.html
let cacheDB;
class MongoDatabase {
    constructor() {
        this.connect();
    }
    static get Instance() {
        return this._instance || (this._instance = new this());
    }
    connect() {
        return __awaiter(this, void 0, void 0, function* () {
            logger.startTimer();
            if (cacheDB && cacheDB.readyState === 1) {
                logger.debug('Reusing existing connection opened');
                logger.endTimer();
                return cacheDB;
            }
            else {
                try {
                    const options = {
                        promiseLibrary: global.Promise,
                        bufferCommands: false,
                        bufferMaxEntries: 0
                    };
                    const uri = `mongodb://${config.get('db.host')}:${config.get('db.port')}/${config.get('db.name')}`;
                    const mongo = yield mongoose_1.connect(uri);
                    cacheDB = mongo.connection;
                    logger.debug('Connected to MongoDB successfully', cacheDB);
                    logger.endTimer();
                    return cacheDB;
                }
                catch (err) {
                    logger.error('Could not connect to MongoDB', err);
                    logger.endTimer();
                    throw err;
                }
            }
        });
    }
}
exports.default = MongoDatabase;
//# sourceMappingURL=mongo.js.map