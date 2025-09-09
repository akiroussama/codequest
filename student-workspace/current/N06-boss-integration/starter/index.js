/**
 * CodeQuest 2.3 - N06 Boss Integration
 */

/**
 * Transforme données brutes en scoreboard trié
 */
function generateScoreboard(players) {
  return pipeline(players);
}

// Simples
function computeTotals(players) {
  return players.map(p => ({ ...p, total: (p.score || 0) + (p.bonus || 0) }));
}

function sortByTotalDesc(entries) {
  return [...entries].sort((a, b) => b.total - a.total);
}

function addRanks(sorted) {
  return sorted.map((p, i) => ({ rank: i + 1, ...p }));
}

function top3(sorted) {
  return sorted.slice(0, 3);
}

function formatScoreboard(entries) {
  return entries.map(({ rank, name, total }) => ({ rank, name, total }));
}

// Faciles
function validatePlayers(players) {
  return players.filter(p => typeof p.score === 'number' && typeof p.bonus === 'number');
}

function normalizeNames(players) {
  return players.map(p => ({ ...p, name: p.name.trim() }));
}

function mergeDuplicatesByName(players) {
  const map = {};
  players.forEach(p => {
    if (map[p.name]) {
      map[p.name].score += p.score;
      map[p.name].bonus += p.bonus;
    } else {
      map[p.name] = { ...p };
    }
  });
  return Object.values(map);
}

function withAverage(players) {
  return players.map(p => ({ ...p, avg: p.total / 2 }));
}

function annotateTier(entries) {
  return entries.map(p => {
    let tier = 'C';
    if (p.total >= 200) tier = 'S';
    else if (p.total >= 150) tier = 'A';
    else if (p.total >= 100) tier = 'B';
    return { ...p, tier };
  });
}

// Moyens
function paginate(entries, page = 1, perPage = 10) {
  const start = (page - 1) * perPage;
  return entries.slice(start, start + perPage);
}

function searchByName(entries, q) {
  const lower = q.toLowerCase();
  return entries.filter(p => p.name.toLowerCase().includes(lower));
}

function computeStats(entries) {
  const totals = entries.map(p => p.total);
  const count = totals.length;
  const min = Math.min(...totals);
  const max = Math.max(...totals);
  const avg = totals.reduce((a, b) => a + b, 0) / count;
  return { count, min, max, avg };
}

function rankWithTies(sorted) {
  const result = [];
  let lastScore = null;
  let lastRank = 0;
  sorted.forEach((p, i) => {
    if (p.total === lastScore) {
      result.push({ ...p, rank: lastRank });
    } else {
      lastRank = i + 1;
      result.push({ ...p, rank: lastRank });
      lastScore = p.total;
    }
  });
  return result;
}

function formatTable(entries) {
  return entries.map(p => `${p.rank}. ${p.name} - ${p.total}`);
}

// Complexes
function pipeline(players) {
  let validated = validatePlayers(players);
  let normalized = normalizeNames(validated);
  let merged = mergeDuplicatesByName(normalized);
  let totals = computeTotals(merged);
  let sorted = sortByTotalDesc(totals);
  let ranked = addRanks(sorted);
  return annotateTier(ranked);
}

function leaderboardDiff(oldBoard, newBoard) {
  const mapOld = Object.fromEntries(oldBoard.map(p => [p.name, p.rank]));
  return newBoard.map(p => ({
    name: p.name,
    from: mapOld[p.name] || null,
    to: p.rank,
    delta: mapOld[p.name] ? mapOld[p.name] - p.rank : null
  }));
}

function bucketize(entries) {
  return entries.reduce((acc, p) => {
    acc[p.tier] = acc[p.tier] || [];
    acc[p.tier].push(p);
    return acc;
  }, {});
}

function topNPerTier(entries, n = 3) {
  const buckets = bucketize(entries);
  const result = {};
  for (const tier in buckets) {
    result[tier] = buckets[tier].sort((a, b) => b.total - a.total).slice(0, n);
  }
  return result;
}

function serializeCSV(entries) {
  const header = 'rank,name,total,tier';
  const lines = entries.map(p => `${p.rank},${p.name},${p.total},${p.tier}`);
  return [header, ...lines].join('\n');
}

module.exports = {
  generateScoreboard,
  computeTotals,
  sortByTotalDesc,
  addRanks,
  top3,
  formatScoreboard,
  validatePlayers,
  normalizeNames,
  mergeDuplicatesByName,
  withAverage,
  annotateTier,
  paginate,
  searchByName,
  computeStats,
  rankWithTies,
  formatTable,
  pipeline,
  leaderboardDiff,
  bucketize,
  topNPerTier,
  serializeCSV
};
