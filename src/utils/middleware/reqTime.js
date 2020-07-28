module.exports = function reqTime(req, res, next) {
  // got this stuff from stackOverflow lol
  // https://stackoverflow.com/a/8888498
  function formDate(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';
    hours %= 12;
    hours = hours || 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${hours}:${minutes} ${ampm}`;
  }
  req.time = formDate(new Date());
  next();
};
