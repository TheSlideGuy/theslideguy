/**
 * A library of error types.
 */

/**
 * Generic HTTP Error class
 * @constructor
 */
function HTTPError() {}

HTTPError.prototype = new Error();


// ====== client errors


function ClientError() {
  this.status = 400;
}

ClientError.prototype = new HTTPError();


function NotFoundError(path) {
  this.path = path;
  this.status = 404;
}

NotFoundError.prototype = new Error();


// ======= server errors

function GenericServerError() {
  this.status = 520;
  this.statusText = 'Unknown Server Error';
}

GenericServerError.prototype = new HTTPError();

function InternalServerError() {
  this.status = 500;
  this.statusText = 'Internal Server Error';
}
