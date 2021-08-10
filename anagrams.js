let array = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

const aclean = (arr) => {
	const map = new Map();
	arr.map(item => {
		const sorted = item.toLowerCase().split('').sort().join('')
		map.set(sorted, item)
	})
	return Array.from(map.values())
}

console.log(aclean(array));