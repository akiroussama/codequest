/**
 * N00: System Check & Warm-up
 * Your first CodeQuest challenge!
 */

/**
 * Returns environment information
 * @returns {Object} Environment details with node version, platform, and ready status
 */
function getEnvironment() {
  const version = process.version.startsWith("v")
    ? process.version.slice(1)
    : process.version;
  const [major] = version.split(".").map(Number);

  return {
    node: process.version,
    platform: process.platform,
    ready: major >= 16
  };
}

/**
 * Creates a welcome message
 * @param {string} name - The name to welcome
 * @returns {string} Welcome message
 */
function warmUp(name = 'Adventurer') {
  return `Welcome ${name} to CodeQuest!`;
}

/**
 * ==============================
 * Extra: 20 Warm-up mini-défis
 * ==============================
 */

// Simples
function greetUpper(name) {
  return `${'HELLO'.toUpperCase()}, ${name}!`;
}

function reverseString(s) {
  return s.split("").reverse().join("");
}

function repeatString(s, n) {
  return s.repeat(n);
}

function parseSemver(version) {
  if (version.startsWith("v")) version = version.slice(1);
  const [major, minor, patch] = version.split(".").map(Number);
  return { major, minor, patch };
}

function isNodeGte(required) {
  const parse = v => {
    if (v.startsWith("v")) v = v.slice(1);
    return v.split(".").map(Number);
  };
  const current = parse(process.version);
  const req = parse(required);

  for (let i = 0; i < 3; i++) {
    if (current[i] > req[i]) return true;
    if (current[i] < req[i]) return false;
  }
  return true; // égalité
}

// Faciles
function sumRange(n) {
  return (n * (n + 1)) / 2;
}

function factorial(n) {
  if (n === 0) return 1;
  let res = 1;
  for (let i = 1; i <= n; i++) res *= i;
  return res;
}

function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function toKebab(str) {
  return str
    .replace(/[_\s]+/g, "-")
    .toLowerCase();
}

function formatBytes(bytes) {
  if (bytes === 0) return "0 B";
  const units = ["B", "KB", "MB", "GB", "TB"];
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  const val = bytes / Math.pow(1024, i);
  return `${parseFloat(val.toFixed(2))} ${units[i]}`;
}

// Moyens
function range(start, end, step = 1) {
  const result = [];

  // si step est nul, on empêche la boucle infinie
  if (step === 0) {
    throw new Error("Le pas (step) ne peut pas être 0");
  }

  // cas croissant
  if (step > 0) {
    for (let i = start; i <= end; i += step) {
      result.push(i);
    }
  } 
  // cas décroissant
  else {
    for (let i = start; i >= end; i += step) {
      result.push(i);
    }
  }

  return result;
}

function uniqueSorted(arr) {
  // 1) Array.from(new Set(arr)) enlève les doublons
  // 2) .sort((a,b) => a - b) trie numériquement en ordre croissant
  return Array.from(new Set(arr)).sort((a, b) => a - b);
}

function chunkArray(arr, size) {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}

function median(arr) {
  const sorted = uniqueSorted(arr);
  const mid = Math.floor(sorted.length / 2);
  if (sorted.length % 2 === 0) {
    return (sorted[mid - 1] + sorted[mid]) / 2;
  }
  return sorted[mid];
}

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
