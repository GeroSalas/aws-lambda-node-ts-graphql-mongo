"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @export
 * @class SimpleLogger (TODO: replace with https://github.com/winstonjs/winston)
 */
class SimpleLogger {
    constructor(target) {
        this.target = target;
    }
    debug(message, data = {}) {
        console.log(message, data);
    }
    error(message, error = {}) {
        console.error(`Error at ${this.target} caused by: ${message}`, error);
    }
    startTimer() {
        console.time(this.target);
    }
    endTimer() {
        console.timeEnd(this.target);
    }
}
exports.default = SimpleLogger;
//# sourceMappingURL=logging.js.map