module.exports = function myLogger(req, res, next) {
  console.log('Logging something from function myLogger :)');
  console.log(`${req.time} || Req header: ${req.headers}`);
  console.log(`${req.time} || Req body ${req.body}`);
  next();
};
