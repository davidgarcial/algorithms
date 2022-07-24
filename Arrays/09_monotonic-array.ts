export function isMonotonic(array: number[]) {
    let increasingTrend = true;
    let decreasingTrend = true;
    for(let i = 0; i < array.length; i++) {
      if(i === 0){
        continue;
      } 
      if (array[i] > array[i-1]){
        decreasingTrend = false;
      } 
      if (array[i] < array[i-1]){
        increasingTrend = false;
      }
    }
    // only true if only one is true, NOT both
    return increasingTrend || decreasingTrend;
  }
  