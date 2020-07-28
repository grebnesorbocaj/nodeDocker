module.exports = function myLogger(req, res, next) {
  console.log('Logging something from function myLogger :)');
  console.log('Req header: ', req.headers);
  console.log('Req body', req.body);
  next();
};
