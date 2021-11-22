// [2, 1, 1, 2] → [2, 2, 2, 2]
// [7, 9, 3, 1, 8] → [4, 4, 4, 4, 1]
// [11, 3, 6, 0, 10] → [2, 2, 3, 3, 3]


const foo = (arr) => {
	let even = 0;
	let odd = 0;
	let result = [];

	for (let i = 0; i < arr.length; i++) {
		if (!(arr[i] % 2)) {
			even++
		} else {
			odd++
		}
	}

	arr.forEach(item => {
		if (!(item % 2)) result.push(even)
		else result.push(odd)
	})

	return result;
}

// foo([7, 9, 3, 1, 8])

// ======================================================================

// [2, 1, 1, 1, 2] → [1, 3, 3, 3, 1]
// [11, 3, 6, 0, 10] → [2, 2, 3, 3, 3]

const bar = (arr) => {
	let even = 0;
	let evenLength = 0
	let odd = 0;
	let oddLength = 0
	let result = [];

	for (let i = 0; i < arr.length; i++) {
		if (!(arr[i] % 2)) {
			oddLength = 0
			evenLength++
			if (!evenLength || even < evenLength) {
				even++
			}
		} else {
			evenLength = 0
			oddLength++
			if (!oddLength || odd < oddLength) {
				odd++
			}
		}
	}
	arr.forEach(item => {
		if (!(item % 2)) result.push(even)
		else result.push(odd)
	})
	console.log(result);
}

// bar([2, 1, 1, 1, 2])

// ======================================================================


const calcResult = (array) => {
  let start = 0;
  let end = 0;
  let result = [];

  while (result.length < array.length) {
    if ((array[end] - array[start]) % 2 === 0) {
      end++;
    } else {
      const count = end - start;
      for (let i = start; i < end; i++) {
        result.push(count);
      }
      start = end;
    }
  }

  return result;
};

console.log(calcResult([2, 1, 1, 2]));
console.log(calcResult([7, 9, 3, 1, 8]));
console.log(calcResult([11, 3, 6, 0, 10]));