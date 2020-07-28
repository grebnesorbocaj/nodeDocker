const target = require('../../../src/utils/middleware/reqTime');

describe('src/utils/middleware/reqTime.js', () => {
  describe('invoke reqTime', () => {
    const RealDate = Date;
    function mockDate(isoDate) {
      global.Date = class extends RealDate {
        constructor() {
          return new RealDate(isoDate);
        }
      };
    }
    afterEach(() => {
      global.Date = RealDate;
    });

    it('should add "time" key to body in AM', () => {
      mockDate('2017-11-25T0:09:56z');
      const stubInput = {};
      const req = stubInput; const res = ''; const
        next = jest.fn();
      expect(req).not.toHaveProperty('time');
      target(req, res, next);
      expect(req).toHaveProperty('time');
    });
    it('should add "time" key to body in PM', () => {
      mockDate('2017-11-25T15:09:56z');
      const stubInput = {};
      const req = stubInput; const res = ''; const
        next = jest.fn();
      expect(req).not.toHaveProperty('time');
      target(req, res, next);
      expect(req).toHaveProperty('time');
    });
  });
});
