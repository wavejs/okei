'use strict';

const { expect } = require('chai');
const okei = require('./');

describe('map', () => {
  it('should return array of keys from the given object', () => {
    const obj = {
      korea: 'seoul',
      japan: 'tokyo',
      thailand: 'bangkok',
    };
    expect(okei('map')(obj, value => value)).to.deep.equal(['korea', 'japan', 'thailand']);
  });
});

describe('Detect unsupported method', () => {
  it('should detect unsupported method', () => {
    const obj = {
      korea: 'seoul',
      japan: 'tokyo',
      thailand: 'bangkok',
    };
    expect(() => okei('then')(obj, value => value)).to.throw(Error, 'then is not supported method. Please check method name again.');
  });
})
