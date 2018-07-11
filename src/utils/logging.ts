/**
 * @export
 * @class SimpleLogger (TODO: replace with https://github.com/winstonjs/winston)
 */
export default class SimpleLogger {
    private target: string

    constructor(target: string) {
        this.target = target
    }

    public debug(message: string, data: any = {}) {
        console.log(message, data)
    }

    public error(message: string, error: any = {}) {
        console.error(`Error at ${this.target} caused by: ${message}`, error)
    }

    public startTimer() {
        console.time(this.target)
    }

    public endTimer() {
        console.timeEnd(this.target)
    }
}
