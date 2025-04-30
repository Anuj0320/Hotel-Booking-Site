class ExpressError extends Error {
    constructor(statusCode, message) {
        super();
        this.statuscode = statusCode;sCode;
        this.message = message;
    }
}
module.exports = ExpressError;