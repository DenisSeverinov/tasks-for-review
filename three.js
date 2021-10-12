const obj = {
		value: 6,
		left: {
			value: 3,
			left: {
				value: 3,
			},
			right: {
				value: 1,
			},
		},
		right: {
			value: 1,
			left: {
				value: 3,
			},
			right: {
				value: 1,
			},
		}
}

function recursionThree(obj) {
	let count = obj.value;

	if (obj.left) {
		count += recursionThree(obj.left)
	}

	if (obj.right) {
		count += recursionThree(obj.right)
	}

	return count
}

console.log(recursionThree(obj))