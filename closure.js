// должно выводить:

// [1]
// [1, 1]
// [1, 1, 1]

for (var i = []; i.length < 3; i.push(1))  {
	const fn = (i) => {
		setTimeout(() => {
				console.log(i)
			}, i.length * 1000);
	}
		fn([...i, 1])
}