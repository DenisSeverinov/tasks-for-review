function decorator(fn) {
	let cache = new Map();

	return function(...rest) {
		let hash = rest.join(',')
		if (cache.has(hash)) {
			return cache.get(hash)
		}
		let result = fn.apply(this, rest)

		cache.set(hash, result)
		return result
	}
}

const obj = {
	sum(a, b) {
		return a ** b
	}
}

obj.sum = decorator(obj.sum)

console.log(obj.sum(2, 2))
console.log(obj.sum(2, 2))