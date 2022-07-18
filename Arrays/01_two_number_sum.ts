export function twoNumberSum(array: number[], targetSum: number) {
    for(let num of array) {
        for(let num2 of array) {
            if(num + num2 === targetSum && num !== num2) {
                return [num, num2];
            }
        }
    }

    return [];
}

const res = twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10);

console.log(res);
