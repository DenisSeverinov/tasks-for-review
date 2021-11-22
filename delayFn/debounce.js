const debounce = (fn, delay) => {
	let timeout;
	return function(...rest) {
		const fnCall = () => { fn.apply(this, rest) }

		clearTimeout(timeout)
		timeout = setTimeout(fnCall, delay);
	}
}

onChange = debounce(onChange, 300)

function onChange(event) {
	console.log(event.target.value);
}

onChange = debounce(onChange, 300)

document.querySelector('.debounce').addEventListener('keyup', onChange)
