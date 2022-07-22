export function smallestDifference(arrayOne: number[], arrayTwo: number[]) {
    let minDiff: number = null;
    let res: number[] = [];

    for (let num1 of arrayOne) {
        for (let num2 of arrayTwo) {
            const op = Math.abs(num1 - num2);

            if(op === 0) {
            return [num1, num2];
            }
        
            if(!minDiff || op < minDiff) {
            minDiff = op;
            res = [num1, num2];
            }
        }
    }

    return res;
}
