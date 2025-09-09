/**
 * CodeQuest 2.3 - N03 Map/Filter Pipeline
 */

// Simples
function doubleNumbers(numbers) {
  return numbers.map(n => n * 2);
}

function filterEven(numbers) {
  return numbers.filter(n => n % 2 === 0);
}

function evenDoubled(numbers) {
  return numbers.filter(n => n % 2 === 0).map(n => n * 2);
}

function squareNumbers(numbers) {
  return numbers.map(n => n * n);
}

function incrementAll(numbers) {
  return numbers.map(n => n + 1);
}

function onlyPositive(numbers) {
  return numbers.filter(n => n > 0);
}

function onlyStrings(values) {
  return values.filter(v => typeof v === 'string');
}

function lengths(strings) {
  return strings.map(s => s.length);
}

// Faciles
function squareOdds(numbers) {
  return numbers.filter(n => n % 2 !== 0).map(n => n * n);
}

function compact(values) {
  return values.filter(v => Boolean(v));
}

function pluck(list, key) {
  return list.map(o => o[key]);
}

function filterByKey(list, key) {
  return list.filter(o => key in o);
}

function tagEvenOdd(numbers) {
  return numbers.map(n => ({ n, type: n % 2 === 0 ? 'even' : 'odd' }));
}

// Moyens
function normalizeEmails(users) {
  return users.map(u => ({ ...u, email: u.email.toLowerCase().trim() }));
}

function uniqueById(list) {
  const seen = new Set();
  return list.filter(item => {
    if (seen.has(item.id)) return false;
    seen.add(item.id);
    return true;
  });
}

function topNByScore(list, n) {
  return [...list].sort((a, b) => b.score - a.score).slice(0, n);
}

function pipelineNormalize(numbers) {
  return numbers
    .filter(n => n != null && !Number.isNaN(Number(n)))
    .map(n => Number(n))
    .map(n => n * 2);
}

function annotateRank(list) {
  return [...list]
    .sort((a, b) => b.score - a.score)
    .map((item, index) => ({ ...item, rank: index + 1 }));
}

// Complexes
function wordFrequencies(words) {
  const result = {};
  words.forEach(word => {
    if (result[word]) result[word]++;
    else result[word] = 1;
  });
  return result;
}

function windowedMax(numbers, k) {
  return numbers.map((_, i) => {
    const slice = numbers.slice(i, i + k);
    return Math.max(...slice);
  });
}

function zipMap(a, b) {
  return a.map((val, i) => ({ a: val, b: b[i] }));
}

function difference(a, b) {
  const setB = new Set(b);
  return a.filter(x => !setB.has(x));
}

function intersection(a, b) {
  const setB = new Set(b);
  return a.filter(x => setB.has(x));
}

module.exports = {
  doubleNumbers,
  filterEven,
  evenDoubled,
  squareNumbers,
  incrementAll,
  onlyPositive,
  onlyStrings,
  lengths,
  squareOdds,
  compact,
  pluck,
  filterByKey,
  tagEvenOdd,
  normalizeEmails,
  uniqueById,
  topNByScore,
  pipelineNormalize,
  annotateRank,
  wordFrequencies,
  windowedMax,
  zipMap,
  difference,
  intersection
};
