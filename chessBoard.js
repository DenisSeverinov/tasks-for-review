let str = ''

for (let i = 0; i < 9; i++) {
	for (let j = 0; j < 9; j++) {
		if (i % 2) {
			str += (j % 2) ? ' ' : '#'
		} else {
			str += (j % 2) ? '#' : ' '
		}
	}
	console.log(str);
	str = ''
}






// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #