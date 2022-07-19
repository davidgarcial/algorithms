export function tournamentWinner(competitions: string[][], results: number[]) {
    // Write your code here.
      const score = {};
      
      for(let [index, competition] of competitions){
          const result = results[index];
          const home = competition[0];
          const away = competition[1];
          
          score[home] = score[home] + (result === 1 ? 3 : 0);
          score[away] = score[away] + (result === 1 ? 3 : 0);
      }
      
    return Object.keys(score).reduce((a,b) => (score[a] > score[b] ? a : b));
  }
  
  // home - away
  // 0 - away gana
  // 1 - home gana