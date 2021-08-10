//Вернуть массив элементов в порядке наиболее частого встречания

const arr = ['orange', 'banana', 'apple', 'orange', 'banana', 'banana']

const mySort = (array) => {
	const result = []
	const temp = array.reduce((acc, cur) => {
		acc[cur] = (acc[cur] || 0) + 1
		return acc
	}, {})
	return Object.keys(temp).sort((a, b) => temp[b] - temp[a])
}

console.log(mySort(arr))