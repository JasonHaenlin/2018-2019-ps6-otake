
/* this js file halps us in handling erros */

const logTheError = require('../config').logger.logTheError;

module.exports = {
  // eslint-disable-next-line no-unused-vars
  handleDevErrors: async (err, req, res, next) => {
    /* log the error using winston for all production errors */
    logTheError(err.stack || err);
    /* this is for pure API base */
    if (process.env.NODE_ENV === 'development') {
      return res.status(500).json({ status: false, stack: err.stack || err });
    }
    res.status(500).json({ status: false, message: 'something went wrong' });
  },
  /* this is for handling 404 error */
  handle404Error: async (req, res) => {
    res.status(404).json({ status: false, code: 404, message: 'please check URL' });
  },
  /* centralizing all the errors */
  handleExceptions: fn =>
    (req, res, next) => {
      // eslint-disable-next-line promise/no-callback-in-promise
      fn(req, res).catch((error) => next(error));
    }
};