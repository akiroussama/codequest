/**
 * CodeQuest 2.3 - N01 Pure Functions
 * 
 * Mission: Implémenter 3 fonctions pures sans effets de bord
 * 
 * Règles des fonctions pures:
 * 1. Même entrée → Même sortie (déterministe)
 * 2. Aucun effet de bord (pas de console.log, mutations, etc.)
 */

/**
 * Additionne deux nombres
 * @param {number} a - Premier nombre
 * @param {number} b - Deuxième nombre  
 * @returns {number} - Somme de a et b
 */
function add(a, b) {
  return a + b;
  // TODO: Retourner la somme de a et b
}

/**
 * Vérifie si un nombre est pair
 * @param {number} n - Nombre à tester
 * @returns {boolean} - true si pair, false si impair
 */
function isEven(n) {
  return n % 2 === 0;
  // TODO: Retourner true si n est pair, false sinon
  // Indice: utilisez l'opérateur modulo (%)
}

/**
 * Calcule la somme de tous les éléments d'un tableau
 * @param {number[]} arr - Tableau de nombres
 * @returns {number} - Somme de tous les éléments
 */
function sum(arr) {
  return arr.reduce((acc, val) => acc + val, 0);
  // TODO: Retourner la somme de tous les éléments du tableau
  // Indice: vous pouvez utiliser une boucle ou une méthode tableau
}

/**
 * ==========================
 * SUPPLÉMENT: 20 Défis Pures
 * ==========================
 * Ajoutez des implémentations SANS effets de bord.
 * Groupés par difficulté: 5 simples, 5 faciles, 5 moyens, 5 complexes.
 * Conservez les fonctions pures: même entrée → même sortie, pas d'I/O.
 */

// Simples (compléter pour atteindre 5 simples avec add/isEven/sum)
/**
 * Retourne l'opposé arithmétique
 */
function negate(n) {
  return -n;
  // TODO: Retourner -n
}

/**
 * Retourne le maximum de deux nombres
 */
function maxOfTwo(a, b) {
  return a >= b ? a : b;
  // TODO: Retourner a si a >= b sinon b
}

// Faciles (5)
/**
 * Contraint n dans l'intervalle [min, max]
 */
function clamp(n, min, max) {
  return n < min ? min : n > max ? max : n;
  // TODO: Retourner min si n < min, max si n > max, sinon n
}

/**
 * Moyenne arithmétique d'un tableau de nombres
 */
function average(arr) {
  return arr.length === 0 ? 0 : sum(arr) / arr.length;
  // TODO: Utiliser sum(arr) / arr.length (gérer arr vide → NaN ou 0)
}

/**
 * Compte le nombre d'occurrences de value dans arr
 */
function countOccurrences(arr, value) {
  return arr.reduce((count, v) => count + (v === value ? 1 : 0), 0);
  // TODO: Itérer et compter strictement === value
}

/**
 * Vérifie si une chaîne est un palindrome (insensible à la casse/espaces)
 */
function isPalindrome(str) {
  const normalized = str.toLowerCase().replace(/\s+/g, '');
  const reversed = normalized.split('').reverse().join('');
  return normalized === reversed;
  // TODO: Normaliser (lowercase, retirer espaces) puis comparer avec renversé
}

/**
 * Somme des valeurs uniques d'un tableau de nombres
 */
function sumUnique(arr) {
  const uniqueValues = Array.from(new Set(arr));
  return sum(uniqueValues);
  // TODO: Éliminer doublons puis sommer
}

// Moyens (5)
/**
 * Supprime les doublons en conservant l'ordre initial
 */
function unique(arr) {
  return Array.from(new Set(arr));
  // TODO: Retourner un nouveau tableau sans doublons
}

/**
 * Retourne un nouvel objet avec uniquement les clés listées
 */
function pick(object, keys) {
  return keys.reduce((obj, key) => {
    if (key in object) {
      obj[key] = object[key];
    }
    return obj;
  }, {});
  // TODO: Construire un nouvel objet { k: object[k] } pour chaque k présent
}

/**
 * Retourne un nouvel objet sans les clés listées
 */
function omit(object, keys) {
  return Object.keys(object).reduce((obj, key) => {
    if (!keys.includes(key)) {
      obj[key] = object[key];
    }
    return obj;
  }, {});
  // TODO: Construire un nouvel objet en excluant keys
}

/**
 * Compose deux fonctions f∘g: x → f(g(x))
 */
function compose2(f, g) {
  return (x) => f(g(x));
  // TODO: Retourner une fonction (x) => f(g(x))
}

/**
 * Normalise une chaîne en kebab-case (lettres minuscules, mots séparés par '-')
 */
function toKebabCase(str) {
  return str
    .toLowerCase()
    .replace(/[\s_]+/g, '-') 
    .replace(/-+/g, '-')    
    .replace(/^-+|-+$/g, ''); 
  // TODO: Remplacer espaces/underscores par '-', baisser la casse, compacter multiples '-'
}

// Complexes (5)
/**
 * Tri rapide (quicksort) pur: retourne un nouveau tableau trié (ascendant)
 */
function quickSort(arr) {
  if (arr.length <= 1) return arr;
  const pivot = arr[arr.length - 1];
  const left = arr.slice(0, -1).filter(x => x <= pivot);
  const right = arr.slice(0, -1).filter(x => x > pivot);
  return [...quickSort(left), pivot, ...quickSort(right)];
  // TODO: Implémenter quicksort sans muter arr
}

/**
 * Mémoïse une fonction unaire (clé = argument JSON.stringify)
 */
function memoizeUnary(fn) {
  const cache = new Map();
  return (arg) => {
    const key = JSON.stringify(arg);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = fn(arg);
    cache.set(key, result);
    return result;
  };
  // TODO: Retourner une fonction avec cache interne basé sur l'argument
}

/**
 * Test d'égalité profonde (objets/arrays primitifs)
 */
function deepEqual(a, b) {
  if (a === b) return true;
  if (typeof a !== 'object' || a === null || typeof b !== 'object' || b === null) {
    return false;
  }
  // TODO: Comparer récursivement types, longueurs, clés et valeurs
}

/**
 * Pipe de gauche à droite: pipe(f,g,h)(x) = h(g(f(x)))
 */
function pipe(...fns) {
  return (x) => fns.reduce((v, f) => f(v), x);
  // TODO: Retourner une fonction qui applique successivement toutes les fns
}

/**
 * Découpe un tableau en morceaux de taille size
 */
function chunk(arr, size) {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
  // TODO: Retourner un nouveau tableau de sous-tableaux (dernière tranche courte possible)
}

// Export pour les tests
module.exports = {
  // existants
  add,
  isEven,
  sum,
  // simples
  negate,
  maxOfTwo,
  // faciles
  clamp,
  average,
  countOccurrences,
  isPalindrome,
  sumUnique,
  // moyens
  unique,
  pick,
  omit,
  compose2,
  toKebabCase,
  // complexes
  quickSort,
  memoizeUnary,
  deepEqual,
  pipe,
  chunk
};


