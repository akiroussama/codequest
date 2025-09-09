/**
 * CodeQuest 2.3 - N04 Reduce & Immutability
 */

function sum(numbers) {
  return numbers.reduce((acc, n) => acc + n, 0);
}

function product(numbers) {
  return numbers.reduce((acc, n) => acc * n, 1);
}

function frequencyMap(values) {
  return values.reduce((acc, v) => ({ ...acc, [v]: (acc[v] || 0) + 1 }), {});
}

function joinWith(values, sep = ',') {
  return values.reduce((acc, v, i) => (i === 0 ? `${v}` : `${acc}${sep}${v}`), '');
}

// Simples
function minValue(numbers) {
  return numbers.reduce((min, n) => (n < min ? n : min), Infinity);
}

function maxValue(numbers) {
  return numbers.reduce((max, n) => (n > max ? n : max), -Infinity);
}

function countTruthy(values) {
  return values.reduce((acc, v) => acc + (v ? 1 : 0), 0);
}

function flattenOnce(arrays) {
  return arrays.reduce((acc, arr) => [...acc, ...arr], []);
}

function sumBy(list, key) {
  return list.reduce((acc, obj) => acc + (obj[key] || 0), 0);
}

// Faciles
function groupBy(list, key) {
  return list.reduce((acc, obj) => {
    const k = obj[key];
    return { ...acc, [k]: [...(acc[k] || []), obj] };
  }, {});
}

function unique(numbers) {
  return numbers.reduce((acc, n) => (acc.includes(n) ? acc : [...acc, n]), []);
}

function mapWithReduce(list, fn) {
  return list.reduce((acc, v) => [...acc, fn(v)], []);
}

function filterWithReduce(list, predicate) {
  return list.reduce((acc, v) => (predicate(v) ? [...acc, v] : acc), []);
}

function partition(list, predicate) {
  return list.reduce(
    (acc, v) => {
      if (predicate(v)) acc.pass.push(v);
      else acc.fail.push(v);
      return acc;
    },
    { pass: [], fail: [] }
  );
}

// Moyens
function compose(...fns) {
  return x => fns.reduceRight((acc, fn) => fn(acc), x);
}

function pipe(...fns) {
  return x => fns.reduce((acc, fn) => fn(acc), x);
}

function dedupeStable(list) {
  return list.reduce((acc, v) => (acc.includes(v) ? acc : [...acc, v]), []);
}

function runningSum(numbers) {
  let total = 0;
  return numbers.map(n => (total += n));
}

function histogram(strings) {
  return strings.reduce((acc, s) => ({ ...acc, [s.length]: (acc[s.length] || 0) + 1 }), {});
}

// Complexes
function deepFreezeClone(obj) {
  if (Array.isArray(obj)) return Object.freeze(obj.map(deepFreezeClone));
  if (obj && typeof obj === 'object') {
    const clone = Object.entries(obj).reduce((acc, [k, v]) => ({ ...acc, [k]: deepFreezeClone(v) }), {});
    return Object.freeze(clone);
  }
  return obj;
}

function deepMerge(objects) {
  return objects.reduce((acc, obj) => {
    const keys = Object.keys(obj);
    return keys.reduce((innerAcc, k) => {
      const valA = innerAcc[k];
      const valB = obj[k];
      if (valA && typeof valA === 'object' && valB && typeof valB === 'object') {
        innerAcc[k] = deepMerge([valA, valB]);
      } else {
        innerAcc[k] = valB;
      }
      return innerAcc;
    }, { ...acc });
  }, {});
}

function diffArrays(a, b) {
  const setB = new Set(b);
  return {
    added: b.filter(x => !a.includes(x)),
    removed: a.filter(x => !setB.has(x)),
    kept: a.filter(x => setB.has(x))
  };
}

function toCSV(rows) {
  if (!rows.length) return '';
  const headers = Object.keys(rows[0]);
  return [
    headers.join(','),
    ...rows.map(r => headers.map(h => r[h]).join(','))
  ].join('\n');
}

function indexBy(list, key) {
  return list.reduce((acc, item) => ({ ...acc, [item[key]]: item }), {});
}

module.exports = {
  sum,
  product,
  frequencyMap,
  joinWith,
  minValue,
  maxValue,
  countTruthy,
  flattenOnce,
  sumBy,
  groupBy,
  unique,
  mapWithReduce,
  filterWithReduce,
  partition,
  compose,
  pipe,
  dedupeStable,
  runningSum,
  histogram,
  deepFreezeClone,
  deepMerge,
  diffArrays,
  toCSV,
  indexBy
};
