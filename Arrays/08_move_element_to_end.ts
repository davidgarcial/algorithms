export function moveElementToEnd(array: number[], toMove: number) {
    const elementsToMove = array.filter(num => num === toMove);
    const finalArray = array.filter(num => num !== toMove);
    
    return finalArray.concat(elementsToMove);
  }
  