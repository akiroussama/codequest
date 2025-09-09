/**
 * N01 - Pure Functions
 */

// de base
function add(a, b) {
  return a + b;
}

function isEven(n) {
  return n % 2 === 0;
}

function sum(arr) {
  return arr.reduce((acc, x) => acc + x, 0);
}

// simples
function negate(n) {
  return -n;
}

function maxOfTwo(a, b) {
  return a >= b ? a : b;
}

// faciles
function clamp(n, min, max) {
  if (n < min) return min;
  if (n > max) return max;
  return n;
}

function average(arr) {
  if (arr.length === 0) return 0;
  return sum(arr) / arr.length;
}

function countOccurrences(arr, value) {
  return arr.filter(x => x === value).length;
}

function isPalindrome(str) {
  const normalized = str.toLowerCase().replace(/\s+/g, '');
  const reversed = normalized.split('').reverse().join('');
  return normalized === reversed;
}

function sumUnique(arr) {
  return sum([...new Set(arr)]);
}

// moyens
function unique(arr) {
  return [...new Set(arr)];
}

function pick(object, keys) {
  const result = {};
  for (const k of keys) {
    if (Object.prototype.hasOwnProperty.call(object, k)) {
      result[k] = object[k];
    }
  }
  return result;
}

function omit(object, keys) {
  const result = {};
  for (const k in object) {
    if (Object.prototype.hasOwnProperty.call(object, k) && !keys.includes(k)) {
      result[k] = object[k];
    }
  }
  return result;
}

function compose2(f, g) {
  return (x) => f(g(x));
}

function toKebabCase(str) {
  return str
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase()
    .replace(/-+/g, '-');
}

// complexes
function quickSort(arr) {
  if (arr.length <= 1) return arr;
  const [pivot, ...rest] = arr;
  const left = rest.filter(x => x <= pivot);
  const right = rest.filter(x => x > pivot);
  return [...quickSort(left), pivot, ...quickSort(right)];
}

function memoizeUnary(fn) {
  const cache = {};
  return function(arg) {
    const key = JSON.stringify(arg);
    if (!(key in cache)) {
      cache[key] = fn(arg);
    }
    return cache[key];
  };
}

function deepEqual(a, b) {
  if (a === b) return true;
  if (typeof a !== typeof b) return false;

  if (a && b && typeof a === 'object') {
    if (Array.isArray(a) !== Array.isArray(b)) return false;
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);
    if (keysA.length !== keysB.length) return false;
    return keysA.every(k => deepEqual(a[k], b[k]));
  }

  return false;
}

function pipe(...fns) {
  return (x) => fns.reduce((acc, fn) => fn(acc), x);
}

function chunk(arr, size) {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

// export
module.exports = {
  add,
  isEven,
  sum,
  negate,
  maxOfTwo,
  clamp,
  average,
  countOccurrences,
  isPalindrome,
  sumUnique,
  unique,
  pick,
  omit,
  compose2,
  toKebabCase,
  quickSort,
  memoizeUnary,
  deepEqual,
  pipe,
  chunk
};
