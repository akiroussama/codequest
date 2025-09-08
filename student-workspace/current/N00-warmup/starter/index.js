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
  
  // TODO: Retourner un message en UPPERCASE: `HELLO, ${name}!`
  return `HELLO, ${name.toUpperCase()}!`;
}

function reverseString(s) {
  // TODO: Retourner la chaîne inversée
  return s.split('').reverse().join('');
}

function repeatString(s, n) {
  // TODO: Répéter s n fois (n>=0) sans effets de bord
  return s.repeat(n);
}

function parseSemver(version) {
  // TODO: Retourner { major, minor, patch } depuis 'v16.14.2' ou '16.14.2'
  if (version.startsWith('v')) {
    version = version.slice(1);
  }
  const [major, minor, patch] = version.split('.').map(Number);
  return { major, minor, patch };


}

function isNodeGte(required) {
  // TODO: Retourner true si process.version >= required (ex: '16.0.0') sans effets de bord

  // const [major, minor, patch] = process.version.split('.').map(Number);
  const { major, minor, patch } = parseSemver(process.version);
  const [major1, minor1, patch1] = required.split('.').map(Number);

  return (major > major1) || (major === major1 && minor > minor1) || (major === major1 && minor === minor1 && patch >= patch1);

}

// Faciles
function sumRange(n) {
  // TODO: Somme 1..n (n>=1)

  // return (n * (n + 1)) / 2;
  let sum = 0;
  for (i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;

}

function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
  // TODO: Factorielle de n (0! = 1)

}

function isPrime(n) {
  if (n < 2) return false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;

}

function toKebab(str) {
  // TODO: Convertir 'Hello World_test' → 'hello-world-test'
  str = str.replace(/[_\s]+/g, '-').toLowerCase(); // Remplace les espaces et underscores par des tirets
  return str;

  // TODO: Convertir 'Hello World_test' → 'hello-world-test'

}

function formatBytes(bytes) {
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];

var i =0;
while (bytes >= 1024 && i < sizes.length - 1) {
  bytes /= 1024;
  i++;
}
  return `${bytes.toFixed(2)} ${sizes[i]}`;
  // if (bytes / 1024**i < 1) 

  
  // TODO: Retourner une chaîne formatée (ex: 1024 → '1 KB') sans I/O

}

// Moyens
function range(start, end, step = 1) {

  // TODO: Retourner un tableau [start, start+step, ..., <= end]
  const result = [];
  for (let i = start; i <= end; i += step) {
    result.push(i);
  }
  return result;

}

function uniqueSorted(arr) {
  // TODO: Retourner valeurs uniques triées (asc)
  return Array.from(new Set(arr)).sort((a, b) => a - b);
}

function chunkArray(arr, size) {
  // TODO: Retourner un tableau de sous-tableaux de taille size
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;

}

function median(arr) {
  // TODO: Retourner la médiane (tableau non vide)
  const sorted = [...arr].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 !== 0 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
  

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
