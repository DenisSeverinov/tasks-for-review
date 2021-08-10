// 0 1 1 2 3 5 8 13 21 34

const fibonacci = (num) => {
	const result = [0, 1]

	for (let i = 2; i <= num; i++) {
		const prevFirst = result[i - 1]
		const prevSecond = result[i - 2]

		result.push(prevFirst + prevSecond)
	}

	return result[num]
}

const fibonacci2 = (num) => {
	if (num < 2) {
		return num
	}

	return fibonacci2(num - 1) + fibonacci2(num - 2)
}

console.log(fibonacci(6));
console.log(fibonacci2(6));