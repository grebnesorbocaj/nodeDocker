/* eslint-env jest */

const request = require('supertest');
const { server } = require('../src/index');

describe('src/index.js', () => {
  describe('app setup', () => {
    it('should be true', () => {
      expect(true).toBe(true);
    });
  });

  describe('get endpoint', () => {
    it('should return "hello boy"', async () => {
      const res = await request(server)
        .get('/');
      expect(res.text).toEqual('hello boy');
    });
  });
});
