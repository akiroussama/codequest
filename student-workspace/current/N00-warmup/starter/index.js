/**
 * N00: System Check & Warm-up
 * Your first CodeQuest challenge!
 */

/**
 * Returns environment information
 * @returns {Object} Environment details with node version, platform, and ready status
 */
function getEnvironment() {
  const nodeVersion = process.version;
  const major = parseInt(nodeVersion.replace(/^v/, '').split('.')[0], 10);
  return {
    node: nodeVersion,
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
 * 5 simples, 5 faciles, 5 moyens, 5 complexes.
 */

// Simples
function greetUpper(name) {
  return `HELLO, ${name}!`
}

function reverseString(s) {
  return s.split('').reverse().join('');
}

function repeatString(s, n) {
  return s.repeat(n);
}

function parseSemver(version) {
  const clean = version.replace(/^v/, '');
  const [major, minor, patch] = clean.split('.').map(Number);
  return { major, minor, patch };
}


function isNodeGte(required) {
  const current = process.version.replace(/^v/, '').split('.').map(Number);
  const need = required.replace(/^v/, '').split('.').map(Number);
  for (let i = 0; i < 3; i++) {
    if (current[i] > need[i]) return true;
    if (current[i] < need[i]) return false;
  }
  return true; // equal
}

// Faciles
function sumRange(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

function factorial(n) {
  if (n === 0 || n === 1){
    return 1;
  }
  return n*factorial(n-1)
}

function isPrime(n) {
  if (n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;
  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }
  return true;
}

function toKebab(str) {
  return str
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, "-")
    .toLowerCase();
}

function formatBytes(bytes) {
  if (!Number.isFinite(bytes)) return 'NaN';
  if (bytes === 0) return '0 B';

  const base = 1024;
  const units = ['B','KB','MB','GB','TB','PB','EB','ZB','YB'];

  const sign = bytes < 0 ? '-' : '';
  let val = Math.abs(bytes);

  const i = Math.min(Math.floor(Math.log(val) / Math.log(base)), units.length - 1);
  const num = val / Math.pow(base, i);

  const formatted = Number(num.toFixed(0)).toString();

  return `${sign}${formatted} ${units[i]}`;
}

// Moyens
function range(start, end, step = 1) {
  if (step === 0) throw new Error("Etape 0?");
  const result = [];
  if (start <= end && step > 0) {
    for (let i = start; i <= end; i += step) {
      result.push(i);
    }
  } else if (start >= end && step < 0) {
    for (let i = start; i >= end; i += step) {
      result.push(i);
    }
  }
  return result;
}

function uniqueSorted(arr) {
  return [...new Set(arr)].sort((a, b) => a - b);
}


function chunkArray(arr, size) {
  if (size <= 0) throw new Error("Array.length doit etre > à 0");
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
  // TODO: Retourner un tableau de sous-tableaux de taille size
}

function median(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return null;
  const sorted = [...arr].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  if (sorted.length % 2 === 0) {
    return (sorted[mid - 1] + sorted[mid]) / 2;
  } else {
    return sorted[mid];
  }
}


module.exports = {
  getEnvironment,
  warmUp,
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
