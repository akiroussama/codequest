/**
 * N00: System Check & Warm-up
 * Your first CodeQuest challenge!
 */

/**
 * Returns environment information
 * @returns {Object} Environment details with node version, platform, and ready status
 */
function getEnvironment() {
  // TODO: Return an object with:
  // - node: process.version (Node.js version)
  // - platform: process.platform (OS platform)
  // - ready: true if node version >= 16
  return {
    node: process.version,
    platform: process.platform,
    ready: true
  };
  // Your code here
}

/**
 * Creates a welcome message
 * @param {string} name - The name to welcome
 * @returns {string} Welcome message
 */
function warmUp(name = 'Adventurer') {
  // TODO: Return "Welcome [name] to CodeQuest!"
  return `Welcome ${name} to CodeQuest!`;
  // Your code here
}

/**
 * ==============================
 * Extra: 20 Warm-up mini-défis
 * ==============================
 * 5 simples, 5 faciles, 5 moyens, 5 complexes.
 */

// Simples
function greetUpper(name) {
  return `HELLO, ${name}!`;
  // TODO: Retourner un message en UPPERCASE: `HELLO, ${name}!`
}

function reverseString(s) {
  return s.split('').reverse().join('');
}

function repeatString(s, n) {
  return s.repeat(n);
}

function parseSemver(version) {
  const cleaned = version.startsWith('v') ? version.slice(1) : version;
  const [major, minor, patch] = cleaned.split('.').map(Number);
  return { major, minor, patch };
  // TODO: Retourner { major, minor, patch } depuis 'v16.14.2' ou '16.14.2'
}

function isNodeGte(required) {
  const [reqMajor, reqMinor, reqPatch] = required.split('.').map(Number);
  const [curMajor, curMinor, curPatch] = process.version.slice(1).split('.').map(Number);
  return (curMajor > reqMajor) || (curMajor === reqMajor && curMinor > reqMinor) || (curMajor === reqMajor && curMinor === reqMinor && curPatch >= reqPatch);
}

// Faciles
function sumRange(n) {
  return (n * (n + 1)) / 2;
  // TODO: Somme 1..n (n>=1)
}

function factorial(n) {
  if (n === 0) return 1;
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function toKebab(str) {
  return str
    .split(/[\s_]+/)
    .map(word => word.toLowerCase())
    .join('-');
}

function formatBytes(bytes) {
  if (bytes === 0) return "0 B";
  if (bytes < 0) throw new Error("Bytes ne peut pas être négatif");

  const units = ["B", "KB", "MB", "GB", "TB", "PB"];
  const i = Math.floor(Math.log(bytes) / Math.log(1024));

  const value = bytes / Math.pow(1024, i);

  // Supprime les décimales inutiles (ex: "1.0 MB" → "1 MB")
  return `${parseFloat(value.toFixed(1))} ${units[i]}`;
}

// Moyens
function range(start, end, step = 1) {
  const result = [];
  for (let i = start; i <= end; i += step) {
    result.push(i);
  }
  return result;
}

function uniqueSorted(arr) {
  return [...new Set(arr)].sort((a, b) => a - b);
}

function chunkArray(arr, size) {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

function median(arr) {
  const sorted = arr.slice().sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 === 1 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
}


// Don't forget to export your functions!
module.exports = {
  getEnvironment,
  warmUp,
  // extras
  greetUpper,
  reverseString,
  repeatString,
  parseSemver,
  isNodeGte,
  sumRange,
  factorial,
  isPrime,
  toKebab,
  formatBytes,
  range,
  uniqueSorted,
  chunkArray,
  median
};
