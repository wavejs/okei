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