# okei [![Build Status](https://travis-ci.org/wavejs/okei.svg?branch=master)](https://travis-ci.org/wavejs/okei)
Object Iteration tool

## Usage

```javascript
const okeiMap = require('okei')('map');

const obj = {
  foo: 'poo',
  bar: 'par',
};

okeiMap(obj, val => val); // returns ['foo', 'bar']
okeiMap(obj, val => obj[val]); // returns ['poo', 'par']
okeiMap('foo', val => val); // returns ['f', 'o', 'o']

const okeiReduce = require('okei')('reduce');

okeiReduce([0, 1, 2, 3], (a, b) => a + b); // returns 6
okeiReduce([[0, 1], [2, 3], [4, 5]], (a, b) => a.concat(b), []); // returns [ 0, 1, 2, 3, 4, 5 ]
okeiReduce(obj, (newObj, key) => {
  newObj[obj[key]] = key;
  return newObj;
}, {}); // returns { poo: 'foo', par: 'bar' }
```