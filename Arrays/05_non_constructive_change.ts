export function nonConstructibleChange(coins: number[]) {
    if(!coins.length)
      return 1;
    
    const sorterCoins = coins.sort(function(a,b) { 
      return a - b;
    });
    
    let minValue = 0;
    
    for(let coin of coins) {
      if(coin > minValue + 1)
        break;
  
      minValue += coin;
    }
    
    return minValue + 1;
  }
  