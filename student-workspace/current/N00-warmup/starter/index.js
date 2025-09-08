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
function warmUp(name = 'Alice') {
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
  // Retourner un message en UPPERCASE: `HELLO, ${name}!`
  return `HELLO, ${name}!`.toUpperCase();
}

function reverseString(s) {
  // Retourner la chaîne inversée
  return s.split('').reverse().join('');
}

function repeatString(s, n) {
  // Répéter s n fois (n>=0) sans effets de bord
  return s.repeat(n);
}

function parseSemver(version) {
  // Retourner { major, minor, patch } depuis 'v16.14.2' ou '16.14.2'
  let v = version.startsWith('v') ? version.slice(1) : version;
  let [major, minor, patch] = v.split('.').map(Number);
  return { major, minor, patch };
}

function isNodeGte(required) {
  // Retourner true si process.version >= required (ex: '16.0.0')
  function parseVer(ver) {
    let v = ver.startsWith('v') ? ver.slice(1) : ver;
    return v.split('.').map(Number);
  }
  const [maj, min, pat] = parseVer(process.version);
  const [reqMaj, reqMin, reqPat] = parseVer(required);
  if (maj > reqMaj) return true;
  if (maj < reqMaj) return false;
  if (min > reqMin) return true;
  if (min < reqMin) return false;
  return pat >= reqPat;
}

// Faciles
function sumRange(n) {
  // Somme 1..n (n>=1)
  return n * (n + 1) / 2;
}

function factorial(n) {
  // Factorielle de n (0! = 1)
  if (n === 0) return 1;
  let res = 1;
  for (let i = 2; i <= n; ++i) res *= i;
  return res;
}

function isPrime(n) {
  // Tester primalité (n entier >= 0)
  if (n < 2) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;
  for (let i = 3; i * i <= n; i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}

function toKebab(str) {
  // Convertir 'Hello World_test' → 'hello-world-test'
  return str.replace(/[\s_]+/g, '-').toLowerCase();
}

function formatBytes(bytes) {
  // Retourner une chaîne formatée (ex: 1024 → '1 KB') sans I/O
  if (bytes === 0) return '0 B';
  const units = ['B', 'KB', 'MB', 'GB', 'TB'];
  let i = 0;
  let num = bytes;
  while (num >= 1024 && i < units.length - 1) {
    num /= 1024;
    i++;
  }
  return (num % 1 === 0 ? num : num.toFixed(2)) + ' ' + units[i];
}

// Moyens
function range(start, end, step = 1) {
  // Retourner un tableau [start, start+step, ..., <= end] ou >= end si step<0
  if (step === 0) throw new Error("step must not be zero");
  const res = [];
  if (step > 0) {
    for (let i = start; i <= end; i += step) {
      res.push(i);
    }
  } else {
    for (let i = start; i >= end; i += step) {
      res.push(i);
    }
  }
  return res;
}

function uniqueSorted(arr) {
  // Retourner valeurs uniques triées (asc)
  return Array.from(new Set(arr)).sort((a, b) => a - b);
}

function chunkArray(arr, size) {
  // Retourner un tableau de sous-tableaux de taille size
  if (size <= 0) throw new Error("size must be positive");
  const res = [];
  for (let i = 0; i < arr.length; i += size) {
    res.push(arr.slice(i, i + size));
  }
  return res;
}

function median(arr) {
  // Retourner la médiane (tableau non vide)
  if (!arr.length) throw new Error("Array must not be empty");
  const sorted = [...arr].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  if (sorted.length % 2 === 1) {
    return sorted[mid];
  } else {
    return (sorted[mid - 1] + sorted[mid]) / 2;
  }
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
