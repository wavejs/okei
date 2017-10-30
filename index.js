'use strict';

module.exports = okei;

function isObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}

function okei(method) {
  // start with Array.prototype first
  const _method = Array.prototype[method];

  // validate method
  if (!_method) {
    throw Error(`${method} is not supported method. Please check method name again.`);
  }

  return (value, ...args) => {
    const elems = isObject(value) ? Object.keys(value) : value;

    return _method.call(elems, ...args);
  };
}
