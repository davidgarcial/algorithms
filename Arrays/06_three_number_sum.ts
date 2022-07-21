type Triplet = [number, number, number];

export function threeNumberSum(array: number[], targetSum: number): Triplet[] {
    if(array.length <= 1)
        return [];

    const sortedArray = array.sort((a,b) => (a - b));

    const res: Triplet[] = [];

    // CurrentSum = CurrentNumber + Left + Rigth
    sortedArray.forEach((value, index) => {
        let left = index + 1;
        let rigth = sortedArray.length - 1;

        while (left < rigth) {
            const currentSum = value + sortedArray[left] + sortedArray[rigth];

            if(currentSum === targetSum) {
                res.push([value, sortedArray[left], sortedArray[rigth]]);
                left += 1;
                rigth -= 1;
            } 
            else if (currentSum < targetSum) {
                left += 1;
            } 
            else if (currentSum > targetSum) {
                rigth -= 1;
            }
        }
    });
    
    return res;
}
