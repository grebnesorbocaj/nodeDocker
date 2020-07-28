const target = require('../../../src/utils/middleware/myLogger');

describe('src/utils/middleware/myLogger.js', () => {
  describe('invoke myLogger with header and boy', () => {
    it('should return log with header and body', () => {
      const stubInput = {
        headers: {
          accept: 'application/json',
        },
        body: {
          something: 'here',
        },
      };
      console.log = jest.fn();
      const req = stubInput; const res = ''; const
        next = jest.fn();
      target(req, res, next);
      expect(console.log.mock.calls[0][0]).toBe('Logging something from function myLogger :)');
    });
  });
});
