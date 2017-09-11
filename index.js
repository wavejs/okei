'use strict';

module.exports = okei;

function isObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}

function okei(method) {
  // start with Array.prototype first
  const _method = Array.prototype[method];

  return (value, ...args) => {
    const elems = isObject(value) ? Object.keys(value) : value;

    return _method.call(elems, ...args);
  };
}