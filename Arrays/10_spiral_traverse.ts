export function spiralTraverse(array: number[][]) {
    const res: number[] = [];
  
    for (let index = 0; index < array.length; index++) {
      if (index === 0)
        res.concat(array[0]);
    }
  
    return res;
  }
  