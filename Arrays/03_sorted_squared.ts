export function sortedSquaredArray(array: number[]) {
	return array.map(num => num*num).sort((a,b)=> a-b);
}

const res = sortedSquaredArray([1, 2, 3, 5, 6, 8, 9]);

console.log(res);
