/**
 * CodeQuest 2.3 - N06 Boss Integration
 */

/**
 * Transforme données brutes en scoreboard trié
 * Input: [{ name: 'Alice', score: 100, bonus: 20 }, ...]
 * Output: [{ rank: 1, name: 'Alice', total: 120 }, ...]
 */
function generateScoreboard(players) {
  return players
    // 1. Calculer total = score + bonus
    .map(player => ({
      ...player,
      total: player.score + player.bonus,
    }))
    // 2. Trier par total décroissant
    .sort((a, b) => b.total - a.total)
    // 3. Ajouter rank (1, 2, 3...)
    .map((player, index) => ({
      rank: index + 1,
      name: player.name,
      total: player.total,
    }));
}


module.exports = { generateScoreboard };


