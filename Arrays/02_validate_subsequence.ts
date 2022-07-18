export function isValidSubsequence(array: number[], sequence: number[]) {
    let remainingArrayIndex = 0;
      let remainingArray = array.slice(remainingArrayIndex);
      for (const element of sequence) {
          const foundIndex = remainingArray.findIndex(e => e === element);
          if (foundIndex < 0) return false;
          remainingArrayIndex = foundIndex + 1;
          remainingArray = array.slice(remainingArrayIndex);
      }
      return true;
  }
  
  const res = isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]);

  console.log(res);

  /*
  // Write your code here.
      let index =  0;
      let matches = 0;
      
      for(let num of sequence) {
          while(num !== array[index]) {
              if(index >=array.length -1)
                  break;
              
              if(num === array[index])
                  matches++;
              
              index++;
          }
      }
    return matches === sequence.length - 1;
  */