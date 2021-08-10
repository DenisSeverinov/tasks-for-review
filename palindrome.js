const searchPalonrome = (str) => {
	str = str.replace(/[^a-zA-ZА-Яа-яЁё]/gi,'').toLowerCase()
	console.log(str.split(''));

	return str === str.split('').reverse().join('')
}

console.log(searchPalonrome('Ann432151251235/.,/.,/.,a'));

